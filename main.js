const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let id = 112
let row = 7;
let col = 7;
let active = "";
let currentGrid;
let mouseDownOnGrid = false;


function drawGrid() {   
    // update current grid 
    if(map[row][col]) {
        // if map has data than add to current grid
        currentGrid = map[row][col];
    } else {
       currentGrid = map[row][col] = JSON.parse(JSON.stringify(grid))
    }

    // draw new grid
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid.length; col++) {
            if(currentGrid[row][col]) 
                document.querySelector(`img[data-row="${row}"][data-col="${col}"]`).src = currentGrid[row][col];
            else 
                document.querySelector(`img[data-row="${row}"][data-col="${col}"]`).src = " "
        }  
    }

    document.querySelector("#id").innerHTML = id
}

function up() {
    // remove active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.remove("active");
    // update up
    row--;
    // add active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
    // change id
    document.querySelector("#id").innerHTML = id = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).dataset.id;
    // draw new grid
    drawGrid();
}

function down() {
    // remove active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.remove("active");
    // update down
    row++;
    // add active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
    // change id
    document.querySelector("#id").innerHTML = id = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).dataset.id;
    // draw new grid
    drawGrid();
}

function right() {
    // remove active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.remove("active");
    // update right
    col++;
    // add active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
    // change id
    document.querySelector("#id").innerHTML = id = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).dataset.id;
    // draw new grid
    drawGrid();
}

function left() {
    // remove active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.remove("active");
    // update left
    col--;
    // add active class
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
    // change id
    document.querySelector("#id").innerHTML = id = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).dataset.id;
    // draw new grid
    drawGrid();
}

function showItems() {
    document.querySelector("#items").style.display = "flex";
}

function hideITems() {
    document.querySelector("#items").style.display = "none";
}

function selectItem(e) {
    if(e.target.src) {
        active = e.target.src;
        document.querySelector("#active-item").src = active;
        hideITems();
    }
}

function showMap() {
    document.querySelector("#map").style.display = "flex";
    document.querySelector("#map-content").style.height = innerHeight<innerWidth ? `calc(${innerHeight}px - 50px)`: `calc(${innerWidth}px - 50px)`;
    document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
}

function closeMap() {
    document.querySelector("#map").style.display = "none";
}

function setMapLocation(e) {
    // check if location has an id
    if (
        e.target.dataset.row &&
        e.target.dataset.col &&
        e.target.dataset.id &&
        !e.target.classList[0]
    ) {
        // remove active class
        document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.remove("active");
        // change active
        document.querySelector("#id").innerHTML = id = e.target.dataset.id;
        row = e.target.dataset.row;
        col = e.target.dataset.col;
        // add active class
        document.querySelector(`div[data-row="${row}"][data-col="${col}"]`).classList.add("active");
        drawGrid();
    } else if (
        e.target.dataset.row &&
        e.target.dataset.col &&
        e.target.dataset.id &&
        e.target.classList[0] == "active"
    ) {
        closeMap();
    }
}

function setTile(e) {
    if(e.type == "mousedown") mouseDownOnGrid = true;
    else if(e.type == "mouseup") mouseDownOnGrid = false;
    // check if location has an id
    if (
        mouseDownOnGrid &&
        active &&
        e.target.dataset.row &&
        e.target.dataset.col &&
        e.target.dataset.id
    ) {
        let row = e.target.dataset.row;
        let col = e.target.dataset.col;
        document.querySelector(`img[data-row="${row}"][data-col="${col}"]`).src = active;
        currentGrid[row][col] = active;
    } 
}

function setEraser() {
    active = " ";
    document.querySelector("#active-item").src = active;
}

drawGrid()
