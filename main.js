boxs=document.querySelectorAll(".box");
resetbtn=document.getElementById("reset");
let newbtn=document.querySelector("#new");
let msg=document.querySelector(".msg");
let winbox=document.querySelector(".win");
let turn=0;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];


for(let box of boxs){
    box.addEventListener('click',()=>{
        if(turn==0){
            box.innerText= "o";
            turn=1;
        }else{
            box.innerText="x";
            turn=0;
        }
        box.disabled=true;
        checkwin();
});
}
const reset=()=>{
    turn=0;
    for(box of boxs){
        box.innerText="";
        box.disabled=false;
        winbox.classList.add("hide");
    }
}

newbtn.addEventListener('click',reset);
resetbtn.addEventListener('click',reset);





disableboxs=()=>{
    for(box of boxs){
        box.disabled=true;
    }
}


showwinner=(p1)=>{
    msg.innerText=p1;
    winbox.classList.remove("hide");
    disableboxs();
}


checkwin=()=>{
    for(pattern  of arr){
        
    let p1=boxs[pattern[0]].innerText;
    let p2=boxs[pattern[1]].innerText;
    let p3=boxs[pattern[2]].innerText;
    if(p1!="" &&p2!="" && p3!=""){
        if(p1==p2 && p2==p3){
        showwinner(p1);
        }
    }
    }
};
