

let numselected = null

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
            cells.addEventListener("click",selectcells)
            cells.classList.add("cells")
            document.getElementById("board").append(cells)
        }
    }
}

function selectnumber()
{
    
    if(numselected != null)
    {
        numselected.classList.remove("numberselected")
    }
  //  numselected.classList.add("numberselected")
  numselected = this
    numselected.classList.add("numberselected")
    
}

function selectcells()
{
    if(numselected)
    {
        this.innerText = numselected.id;
    }
}
