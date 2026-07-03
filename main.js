// import {treeDatabase} from "./treeDatabase";

// const svgCanvas = document.getElementById('svg-canvas');
const tooltip = document.getElementById('global-tooltip');
const titleEl = tooltip.querySelector('.tooltip-title');
const typeEl = tooltip.querySelector('.tooltip-type');
const reqEl = tooltip.querySelector('.tooltip-req');
const descEl = tooltip.querySelector('.tooltip-desc');
const greenEl = tooltip.querySelector('.tooltip-green');

const START_RADIUS = 38;
const END_RADIUS = 42;

//html generator (based on database)
function buildTreeHTML(treeKey, containerId) {
    const targetContainer = document.getElementById(containerId);
    const treeData = treeDatabase[treeKey];

    if (!targetContainer || !treeData) return;

    treeData.nodes.forEach(nodeData => {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = `talent-node ${nodeData.id}`;
        nodeDiv.style.gridArea = nodeData.gridPos;

        nodeDiv.innerHTML = `
            ${nodeData.label}
            <span class="skill-points ${nodeData.pointClass}">${nodeData.points}</span>
        `;

        //attach tooltip listeners right as the node is created
        nodeDiv.addEventListener('mouseenter', () => {
            titleEl.textContent = nodeData.title;
            typeEl.textContent = nodeData.type;
            descEl.textContent = nodeData.desc;
            reqEl.textContent = nodeData.req;
            // reqEl.textContent = nodeData.req ? nodeData.req : '\u00A0';
            greenEl.textContent = nodeData.green;
            tooltip.classList.add('visible');
        });

        //make tooltip follow cursor
        nodeDiv.addEventListener('mousemove', (e) => {
            const offset = 15;

            //get the exact dimensions of the tooltip as it currently exists
            const tooltipWidth = tooltip.offsetWidth;
            const tooltipHeight = tooltip.offsetHeight;

            //get the visible dimensions of the browser window
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            //default position is bottom-right based on viewport (client) coordinates
            let x = e.clientX + offset;
            let y = e.clientY + offset;

            //if tooltip is over the right edge, flip it to the left
            if (x + tooltipWidth > viewportWidth) {
                x = e.clientX - tooltipWidth - offset;
            }

            //if tooltip is over the bottom edge, flip it to the top
            if (y + tooltipHeight > viewportHeight) {
                y = e.clientY - tooltipHeight - offset;
            }

            //add window.scrollX/Y to convert back to document coordinates, to account for zooming
            tooltip.style.left = (x + window.scrollX) + 'px';
            tooltip.style.top = (y + window.scrollY) + 'px';
        });

        //when mouse leaves the icon, fade out
        nodeDiv.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        targetContainer.appendChild(nodeDiv);
    });
}

//pass the treeKey and the specific container to this function
function drawDynamicLines(treeKey, containerId) {
    const treeData = treeDatabase[treeKey];
    const container = document.getElementById(containerId);

    if (!treeData || !treeData.connections || !container) return;

    const svgCanvas = container.querySelector('.talent-lines');

    //clear old lines
    svgCanvas.querySelectorAll('.dynamic-connection').forEach(el => el.remove());

    //loop through every connection
    treeData.connections.forEach(link => {
        const startNode = document.querySelector('.' + link.from);
        const endNode = document.querySelector('.' + link.to);

        //skip if node is missing
        if (!startNode || !endNode) return;

        //use offset properties, so help with CSS does scale()
        const startX = startNode.offsetLeft + (startNode.offsetWidth / 2);
        const startY = startNode.offsetTop + (startNode.offsetHeight / 2);
        const endX = endNode.offsetLeft + (endNode.offsetWidth / 2);
        const endY = endNode.offsetTop + (endNode.offsetHeight / 2);

        if (link.type === 'straight'){
            //calculate angle to stop line at edge of target box
            const angle = Math.atan2(endY- startY, endX - startX);

            //push the start point outward to the edge of the source icon
            const startX_edge = startX + (Math.cos(angle) * START_RADIUS);
            const startY_edge = startY + (Math.sin(angle) * START_RADIUS);

            //pull the end point inward to the edge of the target icon
            const finalX = endX - (Math.cos(angle) * END_RADIUS);
            const finalY = endY - (Math.sin(angle) * END_RADIUS);

            //createElementsNS is required for generating SVG via JS
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', String(startX_edge));
            line.setAttribute('y1', String(startY_edge));
            line.setAttribute('x2', String(finalX));
            line.setAttribute('y2', String(finalY));

            applyStandardStyles(line);
            svgCanvas.appendChild(line);

        } else if (link.type?.includes('elbow')) {
            //push start point to the right edge of the source icon
            let startX_edge = startX + START_RADIUS;
            if (link.type === 'left-elbow'){
                startX_edge = startX - START_RADIUS;
            }

            const startY_edge = startY;

            //horizontally, then straight down
            const elbowX = endX;
            const elbowY = startY;

            //for downward path, edge is just center Y minus radius
            const finalX = endX;
            const finalY = endY - END_RADIUS;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            // 'd' attribute syntax: Move to start, Line to elbow, Line to final
            const pathData = `M ${startX_edge} ${startY_edge} L ${elbowX} ${elbowY} L ${finalX} ${finalY}`;

            path.setAttribute('d', pathData);
            //prevent filling with solid black
            path.setAttribute('fill', 'none');

            applyStandardStyles(path);
            svgCanvas.appendChild(path);
        }
    });
}

//helper function to apply styling to lines and path
function applyStandardStyles(svgElement){
    svgElement.classList.add('dynamic-connection');
}

buildTreeHTML('arts', 'tree-arts');
buildTreeHTML('games', 'tree-games');
buildTreeHTML('computers', 'tree-computers');

//tiny setTimeout here.
//CSS Grid takes a millisecond to physically place the new HTML on the screen.
//If we draw lines instantly, they might draw to coordinates 0,0 before the grid updates.
setTimeout(() => {
    drawDynamicLines('arts', 'tree-arts');
    drawDynamicLines('games', 'tree-games');
    drawDynamicLines('computers', 'tree-computers');
}, 50);

// enable animation/easing once the page actually loads, so that we don't see elements move
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 150);
});