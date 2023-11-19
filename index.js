// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  
    myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
   } 
   else {
    navbar.classList.remove("sticky");
   
  
}
}

// let log = document.getElementById("login")
function green(log){
    log.style.color='#22d172'
    log.style.border=' 1px solid #22d172'
  }
 function white(log){
    log.style.color=" #f2f2f2"
    log.style.border=' 1px solid  #f2f2f2'
  }

  function light(log){
    log.style.backgroundColor=" #7bdcb5"
   }

   function dark(log){
    log.style.backgroundColor=" #22d172"
   }

     function whitetogrey(x){
         x.style.color="skyblue"
     }

     function greytowhite(x){
      x.style.color="#f2f2f2"
  }
  function login(x){
    window.open("https://mailtrap.io/signin")
  }
function signup(x){
  window.open("https://mailtrap.io/register/signup?ref=header")
}


function bluetogreen(x){
  x.style.color="#22d172"
}
function greentoblue(x){
x.style.color="#202c45"
}

function apidocs(x){
  window.open("https://api-docs.mailtrap.io/docs/mailtrap-api-docs/5tjdeg9545058-mailtrap-api?_ga=2.118552137.1515763175.1700398942-251115939.1699281233")
}


imageArr=[
"https://mailtrap.io/wp-content/uploads/2019/07/mailtrap_merge_2720_1360-1.png",
"https://th.bing.com/th/id/OIP.-GbfTcwUX8coyf6uCrzyawAAAA?rs=1&pid=ImgDetMain",
"https://mailtrap.io/wp-content/uploads/2019/09/Open_graph_2.png",
"https://mailtrap.io/wp-content/uploads/2022/10/PHPMailer-Gmail-Tutorial_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-1.png",
"https://mailtrap.io/wp-content/uploads/2019/08/Proven-Ways-to-Send-HTML-Email-with-Gmail-03.png"
]

let img=document.getElementById("review")



let prev=document.getElementById("bu1")
let next=document.getElementById("bu2")
let currImg=1
img.setAttribute('src',imageArr[currImg])
prev.addEventListener('click',function(){
  currImg--;
  if(currImg<0){
    currImg=imageArr.length-1;
  }
  img.setAttribute('src',imageArr[currImg])
 
 
 

})
next.addEventListener('click',function(){
  currImg++;
  if(currImg>=imageArr.length){
    currImg=0;
  }
  img.setAttribute('src',imageArr[currImg])

})