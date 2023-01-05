
var menu = document.querySelector(".setting")

var masterplay = document.getElementById('drop');
var body = document.getElementsByTagName(body);
var light = document.getElementById("light");

 


masterplay.addEventListener('click',()=>{

    console.log("its is working");
    menu.classList.toggle("setting-height");

})

var btn = document.getElementById("dark-btn");
btn.addEventListener('click',()=>{

    console.log("dark-btn is working");
    btn.classList.toggle("dark-btn-on");
    
    light.classList.toggle("OFF");

})




if(localStorage.getItem("theme")=="light"){
 

    dark-btn.classList.remove("dark-btn-on");
    dark-btn.classList.remove("dark");


}


else if (localStorage.getItem("theme")=="dark"){
 

    dark-btn.classList.add("dark-btn-on");
    dark-btn.classList.add("dark");


}

else{
    
}



localStorage.setItem("theme","dark");
localStorage.getItem("theme");





