const tooltip = document.getElementById('global-tooltip');
const titleEl = tooltip.querySelector('.tooltip-title');
const typeEl = tooltip.querySelector('.tooltip-type');
const reqEl = tooltip.querySelector('.tooltip-req');
const descEl = tooltip.querySelector('.tooltip-desc');
const greenEl = tooltip.querySelector('.tooltip-green');
const SVG_NS = 'http://www.w3.org/2000/svg';

// when to disable scroll snapping / desktop layout behaviors i.e. compact windows that cant show all content in one screen
const compactLayoutQuery = window.matchMedia(
    "(max-width: 600px) and (orientation: portrait)," +
    "(min-width: 601px) and (max-width: 1450px) and (orientation: portrait)," +
    "(max-width: 900px) and (max-height: 850px) and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4)," +
    "(max-width: 1699px) and (max-height: 500px) and (orientation: landscape)," +
    "(min-width: 601px) and (max-width: 999px) and (orientation: landscape) and (min-height: 501px)," +
    "(min-width: 1000px) and (max-width: 1366px) and (orientation: landscape) and (min-height: 501px) and (pointer: coarse)"
);


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
    const svgArrows = container.querySelector('.talent-arrows');
    //clear old lines and arrows
    svgCanvas.querySelectorAll('.dynamic-connection').forEach(el => el.remove());
    if (svgArrows) {
        svgArrows.querySelectorAll('.dynamic-arrow').forEach(el => el.remove());
    }

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

            if (svgArrows) {
                const arrow = document.createElementNS(SVG_NS, 'line');
                const stubX = finalX - (Math.cos(angle) * 0.1);
                const stubY = finalY - (Math.sin(angle) * 0.1);
                arrow.setAttribute('x1', String(stubX));
                arrow.setAttribute('y1', String(stubY));
                arrow.setAttribute('x2', String(finalX));
                arrow.setAttribute('y2', String(finalY));
                arrow.classList.add('dynamic-arrow');
                svgArrows.appendChild(arrow);
            }

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

            if (svgArrows) {
                const arrow = document.createElementNS(SVG_NS, 'line');
                arrow.setAttribute('x1', String(finalX));
                arrow.setAttribute('y1', String(finalY - 0.1));
                arrow.setAttribute('x2', String(finalX));
                arrow.setAttribute('y2', String(finalY));
                arrow.classList.add('dynamic-arrow');
                svgArrows.appendChild(arrow);
            }
        }
    });
}

buildTreeHTML('arts', 'tree-arts');
buildTreeHTML('games', 'tree-games');
buildTreeHTML('computers', 'tree-computers');

//
//Tree Hover-Focus Logic
//
const treeContainers = document.querySelectorAll('.talent-tree-container');
let currentFocusedTree = document.getElementById('tree-arts');

function setFocusedTree(targetTree) {
    if (!targetTree || currentFocusedTree === targetTree) return;
    treeContainers.forEach(t => {
        if (t === targetTree) {
            t.classList.add('tree-focused');
            t.classList.remove('tree-unfocused');
        } else {
            t.classList.remove('tree-focused');
            t.classList.add('tree-unfocused');
        }
    });
    currentFocusedTree = targetTree;
}

const finePointerQuery = window.matchMedia('(pointer: fine)');

treeContainers.forEach(tree => {
    tree.addEventListener('mouseenter', () => {
        if (finePointerQuery.matches) {
            setFocusedTree(tree);
        }
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

// //zooming for projects subsection
document.addEventListener("DOMContentLoaded", function () {
    let currentFocused = null;

    function setFocused(card) {
        if (currentFocused === card) return;
        if (currentFocused) currentFocused.classList.remove('focused');
        card.classList.add('focused');
        currentFocused = card;
    }

    const bandObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            //compact/stacked layouts don't use the zoom effect
            if (compactLayoutQuery.matches) {
                entry.target.classList.toggle('focused', entry.isIntersecting);
                return;
            }
            if (entry.isIntersecting) {
                setFocused(entry.target);
            }
            //stays focused until another card becomes focused, never a gap when none are focused
        });
    }, {
        root: null,
        rootMargin: "-49% 0px -49% 0px",
        threshold: 0
    });

    //for grabbing the first focus so the first card lights up as soon as it's on screen
    const entryObserver = new IntersectionObserver((entries) => {
        if (compactLayoutQuery.matches) return;
        entries.forEach(entry => {
            if (entry.isIntersecting && !currentFocused) {
                setFocused(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        bandObserver.observe(card);
        entryObserver.observe(card);
    });
});

// Scroll Snapping
let isAnimating = false;
let scrollEndTimer;

//releases the lock once scrolling has genuinely stopped, via the native scrollend event
function armScrollEndListener() {
    window.addEventListener('scrollend', releaseLock, {once: true});

    //safety valve: never stay locked longer than this, in case scrollend
    //never fires (e.g. the scroll distance was 0, or a browser quirk)
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(releaseLock, 1000); //safe to fudge
}

function releaseLock() {
    isAnimating = false;
    clearTimeout(scrollEndTimer);
    window.removeEventListener('scrollend', releaseLock);
}

//Trackpad Detection Heuristic
//mouse wheels send large, discrete deltas (~100-120). trackpads send small,
//often fractional deltas in rapid bursts. we sample early events to classify,
//then cache the result since a user isn't switching input devices mid-session
let inputDevice = null; //null = undetected yet, 'mouse' or 'trackpad' once known
let detectionSamples = [];
const DETECTION_SAMPLE_SIZE = 3; //safe to fudge - more samples = more confident, slower to kick in

function detectInputDevice(e) {
    detectionSamples.push(e.deltaY);

    if (detectionSamples.length < DETECTION_SAMPLE_SIZE) return;

    //trackpad signature: small and/or non-integer deltas
    const looksLikeTrackpad = detectionSamples.every(d =>
        Math.abs(d) < 50 || !Number.isInteger(d)
    );

    inputDevice = looksLikeTrackpad ? 'trackpad' : 'mouse';
    detectionSamples = []; //free the array, no longer needed
}

window.addEventListener('wheel', (e) => {
    //allow ctrl+wheel (and meta+wheel) for browser zoom
    if (e.ctrlKey || e.metaKey) {
        return;
    }

    //disable when the layout is in compact/stacked mode
    if (compactLayoutQuery.matches) {
        return;
    }

    //classify input device from the first few events, then remember it
    if (inputDevice === null) {
        detectInputDevice(e);
    }

    //once we know it's a trackpad, bail out entirely and let native scroll take over
    if (inputDevice === 'trackpad') {
        return;
    }

    //if hovering over an internal scrollable container, let it scroll naturally first
    const scrollable = e.target.closest('.about-text, .project-info');
    if (scrollable) {
        const isScrollingDown = e.deltaY > 0;
        const canScrollDown = scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1;
        const canScrollUp = scrollable.scrollTop > 1;
        if ((isScrollingDown && canScrollDown) || (!isScrollingDown && canScrollUp)) {
            return; // let native wheel scroll the card content
        }
    }

    e.preventDefault();
    if (isAnimating) return;
    //scroll direction (1 for down, -1 for up)
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = Array.from(document.querySelectorAll('.top-title-bar, #skills-tree, .project-card:not(#last-project), .bottom-nav'));

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
        } else if (sec.classList.contains('bottom-nav')) {
            distance = Math.abs(rect.bottom - window.innerHeight);
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
        const alignMode = target.classList.contains('project-card') ? 'center' :
                target.classList.contains('bottom-nav') ? 'end' : 'start';
        target.scrollIntoView({
            behavior: 'smooth',
            block: alignMode
        });
        armScrollEndListener();
    }
}, {passive: false});

//Nav Link Scrolling. Needed custom for the project section specifically to work right.
document.querySelectorAll('.nav-links a, .about-button').forEach(anchor => {
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