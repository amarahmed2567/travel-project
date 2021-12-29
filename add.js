let navBar=document.querySelector(".navBar");
let searchBtn=document.getElementById("search-btn");
let iconSearchBtn=document.querySelector(".search");
let closeSearch=document.querySelector(".close-searsh");
let loginBtn=document.querySelector("#login-btn");
let loginDiv=document.querySelector(".login");
let closeLogin=document.querySelector(".close");
let menuBar=document.querySelector("#menu-bar");


//searchBtn.scrollTo =function(){
  //  iconSearchBtn.classList.remove("activ-search");
//}

searchBtn.onclick =function(){
    iconSearchBtn.classList.toggle("activ-search");
    searchBtn.classList.toggle("fa-search");
    searchBtn.classList.toggle("fa-times");
}

//login button
loginBtn.onclick = function(){
    loginDiv.classList.toggle("activ-login");
}
closeLogin.onclick =function(){
    loginDiv.classList.remove("activ-login");
}
//menuBar
menuBar.onclick =function(){
    navBar.classList.toggle("mobil");
}
//span video
let spanVideos=document.querySelectorAll(".span-video");
spanVideos.forEach(btn => {
    btn.addEventListener("click",()=>{
        document.querySelector(".spans .activ-span").classList.remove("activ-span");
        btn.classList.add("activ-span");
        document.querySelector(".video").src = btn.getAttribute("data-video");
        
    })
});

let Myreview = document.querySelectorAll(".box-review");
Myreview.forEach(e => {
    e.addEventListener("click",function(){
    document.querySelector(".review .activ-reviwe").classList.remove("activ-reviwe");
    document.querySelector(".review .box-review").classList.add("activ-reviwe");
    })
});

