import '@fortawesome/fontawesome-free/css/all.css';
const article = document.querySelectorAll('.clickedArticle');
const div = document.createElement('div');
const {articlesObject} = require('./articles.js');
import './css/style.css';
import './css/mobile.css';

//display article details
function displayArticle(data) {
   //const clickedArticle = document.querySelectorAll('.click');
   
   div.classList.add('card');
   div.classList.add('article-details');
   div.innerHTML = `
         <h1 class="l-heading">${data.title}</h1>
         <div class="" id="details">
            <img id="img-1" src=${data.img} >
            <img id="img-2" src=${data.img2} >
            <img id="img-3" src=${data.img3} >
         </div>
         <div class="meta">
            <small>
               <i class="fas fa-user"></i> Written by John Doe June 07. 2024
            </small>
            <div class="category category-${data.category}">${data.category}</div>
         </div>
         <p id="p-1">${data.text1}</p>
         <p id="p-2">${data.text2}</p>
         <p id="p-3">${data.text3}</p>
   `;
   
   const parentElement = document.querySelector('#article-container');
   parentElement.appendChild(div);

};

function clickArticle(e){
   const id = e.target.id;
   window.location.href = `article.html?id=${id}`;
};


article.forEach((art)=> {
   art.addEventListener('click', clickArticle);
});


function init() {
   const page = window.location.pathname;
   const navBtnIndex = document.getElementById('nav-index');
   const navBtnAbout = document.getElementById('nav-about');
   const navBtnBlog = document.getElementById('nav-blog');

   if (page.includes('index')) {
      navBtnIndex.classList.add('current');
      navBtnAbout.classList.remove('current');
      navBtnBlog.classList.remove('current');
   }
   if (page.includes('about')) {
      navBtnIndex.classList.remove('current');
      navBtnAbout.classList.add('current');
      navBtnBlog.classList.remove('current');
   }
   if (page.includes('blog')) {
      navBtnIndex.classList.remove('current');
      navBtnAbout.classList.remove('current');
      navBtnBlog.classList.add('current');
   }

 
   if (page.includes('article')) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get('id');
      // getArticle(id);
      displayArticle(articlesObject[id-1]);
   }

};
   

document.addEventListener('DOMContentLoaded', init);
