const generateButton = document.getElementById("generate-button");
let one = document.getElementById("one");
let two = document.getElementById("two");

const characters = ["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];

function random(){
    let newpass1="";
    let newpass2="";
    for(let i=0;i<9;i++){
        let random = Math.floor(Math.random() * characters.length);
        newpass1=newpass1+characters[random];
    }
    one.textContent = newpass1;
    for(let i=0;i<9;i++){
        let random = Math.floor(Math.random() * characters.length);
        newpass2=newpass2+characters[random];
    }
    two.textContent = newpass2;
}

generateButton.addEventListener("click",random);
