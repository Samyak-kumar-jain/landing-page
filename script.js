let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let loginbtn =  document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let navbar = document.querySelector('#navbar')
let ham = document.querySelector('.menu-bar')

function display(){
    searchbtn.classList.toggle('fa-times');
    if(searchbar.style.display === "none"){
        searchbar.style.display = "flex";
    }else{
        searchbar.style.display = "none";
    }
   
};
 function form(){
    if(loginform.style.display === "none"){
        loginform.style.display = "flex";
    }else{
        loginform.style.display ="none";
    }
 };
function closeform(){
    if(loginform.style.display==="flex"){
        loginform.style.display = "none";
    }else{
        loginform.style.display ="flex";
    }
};
function open(){
    if(navbar.style.display==="none"){
        navbar.style.display= "flex";
    }else{
        navbar.style.display ="none";
    }
};
