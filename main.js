'use strict';

const pics_src = [
  "pics/0.jpg",
  "pics/1.jpg",
  "pics/2.jpg",
  "pics/3.jpg",
  "pics/4.jpg",
  "pics/5.jpg",
  "pics/6.jpg",
];
let num = -1;
function slideshow_timer(){
  if (num === 6){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 2000);




function goBack(){
  if (num === 0) {
      num = 6;
  }
  else {
      num --;
  }
  document.getElementById("mypic").src = pics_src[num];
}

function goForward(){
  if (num === 6) {
      num = 0;
  }
  else {
      num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}