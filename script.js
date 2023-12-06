
;;;;;;;;;;;
let numselected = null
var cellselected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function()
{
    setgame();
}


function setgame()
{
    for(let i = 0;i <= 9;i++)
    {
        let number = document.createElement("div")
        number.id=i
        number.innerText=i
        number.addEventListener("click",selectnumber)
        number.classList.add("number")
        document.getElementById("digits").append (number)
    }
    for(let i = 0;i < 9;i++)
    {
        for(let j = 0; j < 9; j++)
        {
            let cells = document.createElement("div")
            cells.id = i+"-"+j
            if(board[i][j] != "-")
            {
                cells.innerText=board[i][j]
               
                cells.classList.add("cellsfilled")
               

                
            }
            if(i == 2 || i == 5)
            {
                cells.classList.add("divider")
            }
            if(j == 2||j==5)
            {
                cells.classList.add("divider1")
            }
            cells.addEventListener("click",selectcells)
            cells.classList.add("cells")
            document.getElementById("board").append(cells)
        }
    }
}

function selectnumber(){
    if (numselected != null) {
        numselected.classList.remove("number-selected");
    }
    numselected = this;
    numselected.classList.add("number-selected");
}

function selectcells() {
    if (numselected) {
        if (this.innerText != "") {
            return;
        }

        
        let coords = this.id.split("-"); 
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numselected.id) {
            this.innerText = numselected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
