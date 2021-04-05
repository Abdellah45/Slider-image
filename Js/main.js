


//get imges in Array using Array.from[es6]
const imges = Array.from(document.querySelectorAll(".container-slider img"));

//get imges lingth
let imgeslength = imges.length;

//get img number string
let imgNumber = document.getElementById("slider-number");

//set number of img
let currenSlide = 1;

//get Previous button and Next button
const nextButton = document.getElementById("next"),
      prevButton = document.getElementById("prev");
    
//create prev and next function
nextButton.onclick = func;
prevButton.onclick = func;

//create Ul element and give it ID
const Ulist = document.createElement("ul");
Ulist.setAttribute("id","mainul");


//for loop  list items
for (let i = 1; i <= imgeslength; i++) {
  //create list item
  const listItem = document.createElement("li");
  
  //set data-index to the list
  listItem.setAttribute("data-index",i);
  
  //set textnode to the list
  listItem.appendChild(document.createTextNode(i));
  
  //add list to the ul
  Ulist.appendChild(listItem);
}
//add ul to his further
document.getElementById("indecators").appendChild(Ulist);

//get created ul
const created = document.getElementById("mainul");


//create arry bolutes
const boluts = Array.from(document.querySelectorAll("#mainul li"));

boluts.forEach(function(blt) {
  "use strict";
  blt.onclick = function() {
    currenSlide = this.getAttribute("data-index");
    checker();
  }
});

//create function checker
function checker(){
  //set img number
  imgNumber.textContent = "Slice#" + (currenSlide) + " of " + (imgeslength);
  
  removeActive();
  
  //set class active in img
  imges[currenSlide - 1].classList.add("active");
  
  //set class in body
  document.body.className = "img" + currenSlide;
  
  
  
  //set class active in spans
  created.children[currenSlide - 1].classList.add("active");
  
  //chack if slide is the first
  if (currenSlide == 1) {
    prevButton.classList.add("disebel");
  }else {
    prevButton.classList.remove("disebel");
  }
  
  //check if slide is the last
  if (currenSlide == imgeslength) {
    nextButton.classList.add("disebel");
  } else {
    nextButton.classList.remove("disebel");
  }
}
 checker();
//function func
function func (e) {
  if (e.target === nextButton) {
    if (nextButton.classList.contains("disebel")) {
      return false;
    }else{
      currenSlide++;
      checker();
    }
  }else {
    if (prevButton.classList.contains("disebel")) {
      return false;
    }else{
      currenSlide--;
      checker();
    }
  }
};

function bolfunc(element) {
  "use strict";
  currenSlide = element.getAttribute("data-index");
}


//remove all active classes
function removeActive() {
  imges.forEach(function(img){
    "use strict";
    img.classList.remove("active");
  });
  boluts.forEach(function(bol) {
    "use strict";
    bol.classList.remove("active");
  });
}

if (document.body.clientWidth > 400) {
  prevButton.textContent = prevButton.getAttribute("data-mobile");
  nextButton.textContent = nextButton.getAttribute("data-mobile");
}else{
  prevButton.textContent = prevButton.getAttribute("data-disctop");
  nextButton.textContent = nextButton.getAttribute("data-disctop");
  boluts.forEach(function (ch){
    ch.textContent = "";
    ch.style.left = (ch.getAttribute("data-index") * 30) + "px";
  })
}



window.onload = function () {
  localStorage.removeItem("class");
  localStorage.setItem("class","img" + currenSlide);
  document.body.className = localStorage.getItem("class");
}

//console.log(document.getElementById("file").files)