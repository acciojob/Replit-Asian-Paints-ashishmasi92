//your JS code here. If required.

let div = document.querySelectorAll("grid-item")


let inputbox = document.querySelector("#block_id");
let colorbox = document.querySelector("#colour_id")

let btn = document.querySelector("#change_button")
let resetbtn = document.querySelector("#Reset")


function resetColor(){
console.log("hello");

    for(let i=1;i<=9;i++){
let block = document.getElementById(`${i.toString()}`)
console.log(block);

if(block){
    block.style.backgroundColor="transparent"
}
    }
}



btn.addEventListener("click",(e)=>{
    e.preventDefault()

    let input= inputbox.value;
    let color = colorbox.value;


   resetColor()

let targetBlock = document.getElementById(`${input}`)
if(targetBlock){
    targetBlock.style.backgroundColor=`${color}`
}
else{
    alert("invalid input ID please enter a 1-9")
}



})


resetbtn.addEventListener("click",resetColor)



