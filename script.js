var upLeft = 0;
var max;

function assessLeft() {
  if (upLeft === 0) {
    openNavLeft();
  } else if (upLeft === 1) {
    closeNavLeft();
  }
}

function openNavLeft() {
  document.getElementById("sideNavBoxLeft").style.width = "250px";
  document.getElementById("icon").style.marginLeft = "250px";
  upLeft = 1;
  document.getElementById("keyLeft").style.transform = "rotateY(180deg)";
}

function closeNavLeft() {
  document.getElementById("sideNavBoxLeft").style.width = "0";
  document.getElementById("icon").style.marginLeft = "0";
  upLeft = 0;
  document.getElementById("keyLeft").style.transform = "rotateY(0deg)";
}

//proximity

var proximityXLeft = document.querySelector('#main');
document.addEventListener('mousemove', proximitySwitchLeft);

function proximitySwitchLeft(e){
  if (e.clientX < 50 && upLeft === 0) {
    openNavLeft();
  } else if (e.clientX > 250 && upLeft === 1) {
    closeNavLeft();
  }
}

//function open(this){
//  var expandedImage = document.getElementById("expandedImage");
//  expandedImage.src = this.src;
//  expandImg.parentElement.style.display = "block";
//}
function fullSz(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

// initializing a new calendar object, that will use an html container to create itself
var calendar = new Calendar(
  "calendarContainer", // id of html container for calendar
  "small", // size of calendar, can be small | medium | large
  [
    "Sunday", // left most day of calendar labels
    3 // maximum length of the calendar labels
  ],
  [
    "#E91E63", // primary color
    "#C2185B", // primary dark color
    "#FFFFFF", // text color
    "#F8BBD0" // text dark color
  ]
);

// initializing a new organizer object, that will use an html container to create itself
var organizer = new Organizer(
  "organizerContainer", // id of html container for calendar
  calendar, // defining the calendar that the organizer is related to
  data // giving the organizer the static data that should be displayed
);
