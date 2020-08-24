'use strict'

const images = [
  'css/images/image.000.jpg',
  'css/images/image.001.jpg',
  'css/images/image.002.jpg',
  'css/images/image.003.jpg',
  'css/images/image.004.jpg',
  'css/images/image.005.jpg',
  'css/images/image.006.jpg',
];

let currentIndex = 1;

const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex]; 

for( let [index,image] of images.entries()){
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
});