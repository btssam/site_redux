const tooltip = document.getElementById('global-tooltip');
const titleEl = tooltip.querySelector('.tooltip-title');
const typeEl = tooltip.querySelector('.tooltip-type');
const reqEl = tooltip.querySelector('.tooltip-req');
const descEl = tooltip.querySelector('.tooltip-desc');
const greenEl = tooltip.querySelector('.tooltip-green');
const SVG_NS = 'http://www.w3.org/2000/svg';


//
//Build The Tree
//

//HTML generator (based on database)
function buildTreeHTML(treeKey, containerId) {
    const targetContainer = document.getElementById(containerId);
    const treeData = treeDatabase[treeKey];

    if (!targetContainer || !treeData) return;

    treeData.nodes.forEach(nodeData => {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = `talent-node ${nodeData.id} ${nodeData.pointClass}`;
        nodeDiv.style.gridArea = nodeData.gridPos;

        const nodeContent = nodeData.icon
            ? `<img src="${nodeData.icon}" class="talent-icon-img" alt="${nodeData.title}">`
            : nodeData.label;

        nodeDiv.innerHTML = `
            ${nodeContent}
            <span class="skill-points ${nodeData.pointClass}">${nodeData.points}</span>
        `;

        nodeDiv.addEventListener('mouseenter', () => {
            titleEl.textContent = nodeData.title;
            typeEl.textContent = nodeData.type;
            descEl.innerHTML = nodeData.desc;
            reqEl.textContent = nodeData.req;
            greenEl.textContent = "Click To Learn More";
            greenEl.style.display = '';
            tooltip.classList.add('visible');
        });

        //click to learn more, expanding the description
        nodeDiv.addEventListener('click', (e) => {
            if (nodeData.descLong) {
                descEl.innerHTML = nodeData.desc + "<br><br>" +nodeData.descLong;
                greenEl.style.display = 'none';

                //recalculate if tooltip needs shifted/overlapping with bottom edge
                const tooltipRect = tooltip.getBoundingClientRect();
                if (tooltipRect.bottom > window.innerHeight - 20) {
                    tooltip.style.top = `${e.clientY + window.scrollY - tooltipRect.height - 15}px`;
                }
            }
        });

        nodeDiv.addEventListener('mousemove', (e) => {
            const offset = 15;

            const tooltipWidth = tooltip.offsetWidth;
            const tooltipHeight = tooltip.offsetHeight;
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

        nodeDiv.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        targetContainer.appendChild(nodeDiv);
    });
}

//pass the treeKey and the specific container to this function
//this is called during the 'load' event listener
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
        //use offset properties, to help with CSS does scale()
        const startX = startNode.offsetLeft + (startNode.offsetWidth / 2);
        const startY = startNode.offsetTop + (startNode.offsetHeight / 2);
        const endX = endNode.offsetLeft + (endNode.offsetWidth / 2);
        const endY = endNode.offsetTop + (endNode.offsetHeight / 2);

        const START_RADIUS = (startNode.offsetWidth / 2) - 2;
        const END_RADIUS = (endNode.offsetWidth / 2) + 2;

        if (link.type === 'straight'){
            //calculate angle to stop line at edge of target box
            const angle = Math.atan2(endY- startY, endX - startX);
            //push the start point outward to the edge of the source icon
            const startX_edge = startX + (Math.cos(angle) * START_RADIUS);
            const startY_edge = startY + (Math.sin(angle) * START_RADIUS);
            //pull the end point inward to the edge of the target icon
            const finalX = endX - (Math.cos(angle) * END_RADIUS);
            const finalY = endY - (Math.sin(angle) * END_RADIUS);

            //createElementNS is required for generating SVG via JS
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', String(startX_edge));
            line.setAttribute('y1', String(startY_edge));
            line.setAttribute('x2', String(finalX));
            line.setAttribute('y2', String(finalY));

            line.classList.add('dynamic-connection');
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

            const path = document.createElementNS(SVG_NS, 'path');
            // 'd' attribute syntax: Move to start, Line to elbow, Line to final
            const pathData = `M ${startX_edge} ${startY_edge} L ${elbowX} ${elbowY} L ${finalX} ${finalY}`;

            path.setAttribute('d', pathData);
            //prevent filling with solid black
            path.setAttribute('fill', 'none');

            path.classList.add('dynamic-connection');
            svgCanvas.appendChild(path);
        }
    });
}

buildTreeHTML('arts', 'tree-arts');
buildTreeHTML('games', 'tree-games');
buildTreeHTML('computers', 'tree-computers');

//
//Tree Carousel Logic
//

//array representing current positioning - left, center, right
let carouselTrees = ['tree-arts', 'tree-games', 'tree-computers']
let carouselAnimTimer;

function updateCarouselUI() {
    //grab elements based on the new positions
    const leftEl = document.getElementById(carouselTrees[0]);
    const centerEl = document.getElementById(carouselTrees[1]);
    const rightEl = document.getElementById(carouselTrees[2]);

    leftEl.className = 'talent-tree-container pos-left';
    centerEl.className = 'talent-tree-container pos-center';
    rightEl.className = 'talent-tree-container pos-right';
}

document.querySelectorAll('.talent-tree-container').forEach(tree => {
    tree.addEventListener('click', (e) => {
        const currentId = e.currentTarget.id;
        const currentIndex = carouselTrees.indexOf(currentId);

        if (currentIndex === 0 ) {
            //left tree click. move to center
            //pop removes the last item (right) unshift puts it at the front (left)
            //rotates everything one step to the right
            carouselTrees.unshift(carouselTrees.pop());
        }else if (currentIndex === 2) {
            //inverse of above
            //shift removes the first item (left). push puts it at the end (right)
            carouselTrees.push(carouselTrees.shift());
        }else {
            //middle tree clicked, do nothing
            return;
        }

        updateCarouselUI();

        // hide any visible tooltips and prevent any popping up during animation
        // tooltip.classList.remove('visible');
        document.body.classList.add('carousel-animating');
        clearTimeout(carouselAnimTimer);
        carouselAnimTimer = setTimeout(() => {
            document.body.classList.remove('carousel-animating');
        }, 500);
    });
});

// enable animation/easing once the page actually loads, so that we don't see elements move on load.
// also, wait to draw lines, so that it can get the correct placement data
window.addEventListener('load', () => {
    setTimeout(() => {
        drawDynamicLines('arts', 'tree-arts');
        drawDynamicLines('games', 'tree-games');
        drawDynamicLines('computers', 'tree-computers');
        document.body.classList.remove('preload');
    }, 50);
});

//recalculate lines when resizing windows
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('preload'); //disable animations so that the proceeding resize works instantly

    //clear the timer if the user is still actively dragging the window
    clearTimeout(resizeTimer);
    drawDynamicLines('arts', 'tree-arts');
    drawDynamicLines('games', 'tree-games');
    drawDynamicLines('computers', 'tree-computers');

    //set a timer to fire only after the user stops dragging
    resizeTimer = setTimeout(() => {
        //redraw lines using the final, snapped window dimensions
        drawDynamicLines('arts', 'tree-arts');
        drawDynamicLines('games', 'tree-games');
        drawDynamicLines('computers', 'tree-computers');

        //re-enable CSS transitions
        document.body.classList.remove('preload');
    }, 10); // 10ms after dragging stops feels instantaneous
});

//zooming for projects subsection
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null, // Uses the browser viewport
        // This creates a bounding box in the middle of the screen.
        // It ignores the top and bottom of the window.
        rootMargin: "-49% 0px -49% 0px",
        threshold: 0 // Triggers the moment the card touches that middle band
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('focused');
            } else {
                entry.target.classList.remove('focused');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
});

// Scroll Snapping
let isAnimating = false;
let scrollEndTimer;

//releases the lock only once scrolling has fully stopped, prevent trackpad issues
const supportsScrollEnd = 'onscrollend' in window;

function armScrollEndListener() {
    if (supportsScrollEnd) {
        window.addEventListener('scrollend', releaseLock, {once: true});
    } else {
        //fallback for older browsers: gap-based timer, same as before
        window.addEventListener('scroll', handleScrollEnd);
        handleScrollEnd();
    }

    //safety valve: never stay locked longer than this, in case scrollend
    //never fires (e.g. the scroll distance was 0, or a browser quirk)
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(releaseLock, 1000);
}

function releaseLock() {
    isAnimating = false;
    clearTimeout(scrollEndTimer);
    window.removeEventListener('scroll', handleScrollEnd);
}

function handleScrollEnd() {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(releaseLock, 120); //fallback only
}

// when to disable scroll snapping entirely i.e. compact windows that cant show all content in one screen
const compactLayoutQuery = window.matchMedia(
    "(max-width: 600px) and (orientation: portrait)," +
    "(min-width: 601px) and (max-width: 1450px) and (orientation: portrait)," +
    "(max-width: 900px) and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4)," +
    "(max-height: 500px) and (orientation: landscape)," +
    "(min-width: 768px) and (max-width: 1366px) and (orientation: landscape) and (min-height: 501px)"
);

window.addEventListener('wheel', (e) => {
    //disable when the layout is in compact/stacked mode
    if (compactLayoutQuery.matches) {
        return;
    }

    e.preventDefault();
    if (isAnimating) return;
    //scroll direction (1 for down, -1 for up)
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = Array.from(document.querySelectorAll('.top-title-bar, #skills-tree, .project-card'));

    //find the currently active section
    let currentIndex = 0;
    let minDistance = Infinity;
    const viewportCenter = window.innerHeight / 2;
    sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();
        let distance;
        if (sec.classList.contains('project-card')) {
            const elementCenter = rect.top + (rect.height / 2);
            distance = Math.abs(elementCenter - viewportCenter);
        } else {
            distance = Math.abs(rect.top);
        }
        if (distance < minDistance) {
            minDistance = distance;
            currentIndex = index;
        }
    });
    //calculate next index
    const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
    //trigger the scroll
    if (nextIndex !== currentIndex) {
        isAnimating = true;
        const target = sections[nextIndex];
        const alignMode = target.classList.contains('project-card') ? 'center' : 'start';
        target.scrollIntoView({
            behavior: 'smooth',
            block: alignMode
        });
        armScrollEndListener();
    }
}, {passive: false});

//Nav Link Scrolling. Needed custom for the project section specifically to work right.
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                //center for project cards, top for everything else
                const alignMode = targetElement.classList.contains('project-card') ? 'center' : 'start';
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: alignMode
                });
            }
        }
    });
});