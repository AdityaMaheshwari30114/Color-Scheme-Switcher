const buttons= document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        console.log(e.target.id);
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id;      
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id;      
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;      
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;      
        }

    })

});
    



// const grey=document.getElementById("grey");
// grey.onclick = function(){
//     document.body.style.backgroundColor = "grey";
// }
// const white=document.getElementById("white");
// white.onclick = function(){
//     document.body.style.backgroundColor = "white";
// }
