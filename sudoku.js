var numSelected = null;
var tileSelected = null;

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

window.onload = function(){
    setGame();
}

function setGame(){
    // Digits 1-9
    for(let i = 1; i<=9; i++){
        //<div></div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9 * 9
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let kachel = document.createElement("div");
            kachel.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                kachel.innerText = (board[r][c]); 
                kachel.classList.add("tile-style")
                kachel.classList.add("unveraenderbar")  
            }
            if(r == 2 || r == 5){
                kachel.classList.add("horizontal-line");
            }
            if(c == 2 || c == 5){
                kachel.classList.add("vertical-line");
            }
            kachel.addEventListener("click", selectTile);
            kachel.classList.add("tile");
            document.getElementById("board").append(kachel);  
        }
    }

    // Button Löschen erstellen
    let newButton = document.createElement("button");
    newButton.textContent  = "Neustart";
    document.getElementById("clear").append(newButton);
    newButton.addEventListener('click', () => {
        location.reload();
      });
}

function selectNumber(){
   if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    //this = div created setGame() auswahlmöglichkeit zahl 1-9
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile(){
    if(numSelected){
        if(this.classList.contains("unveraenderbar")){ 
        }
        this.innerText = numSelected.id;

        //"0-0" "0-1".. "3-1"
        let coords = this.id.split("-"); //
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        else{
            errors += 1;
            document.getElementById("errors").innerText = "Fehler: " + errors;
        }
    }
}












