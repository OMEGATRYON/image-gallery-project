const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
const alts = {

    'pic1.jpg' : 'cant really see the images without going to downloads',  
    'pic2.jpg' : 'im sure its another cool picture',
    'pic3.jpg' : 'im mostly positive, this is the butterfly picture',
    'pic4.jpg' : 'yup yup yup yup yup yup yup yup yup yup yup yup' ,
    'pic5.jpg' : 'i hope this works or im going to cry'


}

/* Declaring the alternative text for each image file */

/* Looping through images */
for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}
/* Wiring up the Darken/Lighten button */