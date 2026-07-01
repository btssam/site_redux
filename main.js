// console.log("Hello World");

// define connection using html class names of the lines
const talentConnections = [
    {from: 'design-concepts', to: 'writing', type: 'straight'},
    {from: 'sketching', to: 'figure-drawing', type: 'elbow'},
    {from: 'art-3d', to: 'texture-uv', type: 'straight'}
    //tbc
];

const svgCanvas = document.getElementById('svg-canvas');
const container = document.querySelector('.talent-tree-container');

//half the width/height of the icon (40)
//add +-2 so arrowhead overlaps and start is right at the edge
const START_RADIUS = 38;
const END_RADIUS = 42;

function drawDynamicLines(){
    //Clear any lines currently on the screen
    svgCanvas.querySelectorAll('.dynamic-connection').forEach(el => el.remove());

    //get absolute position of main container
    const containerRect = container.getBoundingClientRect();

    //loop through every connection
    talentConnections.forEach(link => {
        const startNode = document.querySelector('.' + link.from);
        const endNode = document.querySelector('.' + link. to);

        //skip if node is missing
        if (!startNode || !endNode) return;

        const startRect = startNode.getBoundingClientRect();
        const endRect = endNode.getBoundingClientRect();

        //calculate the centers of both boxes, relative to the container
        const startX = (startRect.left - containerRect.left) + (startRect.width / 2);
        const startY = (startRect.top - containerRect.top) + (startRect.height / 2);

        const endX = (endRect.left - containerRect.left) + (endRect.width / 2);
        const endY = (endRect.top - containerRect.top) + (endRect.height / 2);

        //draw based on the type of line
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
            line.setAttribute('x1', startX_edge);
            line.setAttribute('y1', startY_edge);
            line.setAttribute('x2', finalX);
            line.setAttribute('y2', finalY);

            applyStandardStyles(line);
            svgCanvas.appendChild(line);

        } else if (link.type === 'elbow'){
            //push start point to the right edge of the source icon
            const startX_edge =  startX + START_RADIUS;
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

drawDynamicLines();

//redraw on zoom
window.addEventListener('resize', drawDynamicLines);
