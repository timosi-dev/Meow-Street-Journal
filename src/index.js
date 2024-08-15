const article = document.querySelectorAll('.clickedArticle');
const div = document.createElement('div');


import './css/style.css';


const articlesObject = [
   {
      "id": "1",
      "category" : "lounging",
      "title" : "Tabby and Tuxedo Cat",
      "text1" : "If you are looking to adopt a cat of your own, or just want to lighten up your mood with some funny cat videos, then pay a visit to the Instagram page dedicated to the three queens of Instagram Reels: Willa, Nala, and Bella.",
      "text2" : "Through their funny content, the three cats have managed to capture a following of 978 followers on Instagram. They, however, mainly concentrate on TikTok where they have 58.8k followers and a total of 581.5k likes, making them one of the most followed cat influencers on TikTok.",
      "text3" : "What we liked the most about Willa, Nala, and Bella is how they incorporated educational posts into their feed. There is a lot that future cat parents can learn from these posts. These cat influencers have been sponsored by the likes of Armarkat, Uproot Clean, and Rowers Wellness, and are open to collaborations.",
      "img" : "img/cats.jpg",
      "img2": "img/articles/photo17.jpg",
      "img3" : "img/articles/photo16.png"
   },
   {
      "id": "2",
      "title" : "Stephanie Lyons-Keeley",
      "category" : "fashion",
      "text1" : "Stephanie is pawrent to 7 disabled cats and she's out on a mission - to prove that all cats deserve love. More than 4k people on Instagram seem to be supporting her agenda. They actively engage with her posts and have made her one of the most sought-after cat influencers on the platform.",
      "text2" : "You'll find the most adorable and heartwarming videos of her special needs cats as they explore the world (mostly their beds!).  The idea behind the page is genuine and it appears to have struck a chord with other cat lovers..",
      "text3" : "The page is full of exciting pictures including cats dressed up in unique outfits and accessories including bows and sunglasses. They're now working to make a mark on TikTok by posting unique content.",
      "img" : "img/articles/Stephanie-Lyons-Keeley.jpg",
      "img2": "img/articles/photo1.png",
      "img3" : "img/articles/photo2.png"
   },
   {
      "id": "3",
      "category" : "travel",
      "title" : "Louis The Kitten Prince",
      "text1" : "Step into the world of feline royalty with @louis_the_kitten_prince, where the enchanting Louis reigns supreme. His owner, Yi-Hsien Chiang, curates this regal cat's Instagram kingdom, and scrolling through Louis' page, you'll quickly see that this kitty thrives on pampering and adoration.",
      "text2" : "Louis, with his majestic demeanor, truly embodies the essence of a kitten prince. His coat? It's pawfection, the epitome of elegance. But it's not all about looks; Louis leads a life that's pawsome in every way.",
      "text3" : "On Louis' Instagram, expect enchanting Reels showcasing his royal adventures and adorable quirks. From lounging like true royalty to playful antics, he'll keep you captivated. Plus, you'll find fascinating insights into the world of cats. Did you know they slap each other as an invitation to play? It's all love in the feline realm.",
      "img" : "img/articles/photo3.png",
      "img2": "img/articles/photo4.png",
      "img3" : "img/articles/photo5.png"
   },
   {
      "id": "4",
      "title" : "Attica Shirley",
      "category" : "lounging",
      "text1" : "Meet Attica Shirley, the sassy tabby cat with a personality as big as her fluffy, oh-so-adorable appearance! This cat is not just your typical feline friend; she's a social media sensation in the making, determined to conquer your Instagram feed one charming pose at a time.",
      "text2" : "With her captivating charisma and those irresistibly fluffy whiskers, Attica knows exactly how to grab your undivided attention. Whether she's striking a stunning pose, basking in the sun, or sharing her favorite indoor hangout spots, you'll find yourself scrolling through her feed, utterly captivated.",
      "text3" : "Speaking of indoors, Attica is all about cozy nights snuggled up in the comfiest spots, and she's already caught the eye of a few brands for exciting Collabs. I have such a strong personality that not all pets (especially cats) have - says Attica.",
      "img" : "img/articles/atticashirley.png",
      "img2": "img/articles/photo6.png",
      "img3" : "img/articles/photo7.png"
   },
   {
      "id": "5",
      "title" : "Amanda Obrien",
      "category" : "lounging",
      "text1" : "Are you a fan of Siberian cats? Meet our next catfluencer, best known for the#SiberianCatsofInstagram hashtag. These cats are living a great life and people love seeing them living like royalty.",
      "text2" : "According to their pawrent, Amanda, one of the cats, Alexei Vladimir, is actually a communist kitty who just happens to live in London. If you visit their Instagram profile you’ll find plenty of pictures that prove this claim. Look for an illustration of Alexei clad in an Ushanka. It has become one of their most popular posts and looks majestic.",
      "text3" : "Amanda also has a blog dedicated entirely to teaching first-time cat parents all they need to learn about raising a cat. You will even find informative content on their main page with more than 9.4k followers. Amanda knows everything there is to know about gifts to give to cats, the right kind of diet for them, etc. ",
      "img" : "img/articles/Amanda-Obrien.jpg",
      "img2": "img/articles/photo8.png",
      "img3" : "img/articles/photo9.png"
   },
   {
      "id": "6",
      "title" : "Aries The Hike Life Cat",
      "category" : "travel",
      "text1" : "Most pet cats are known to be homebodies with little to no interest in the outdoors, but not Aries. She has proven to be a rockstar and is famously known on Instagram as The Adventure Cat. You will see her do a variety of things including hiking and showing unique talents.",
      "text2" : "This might be the most unique thing about this cat but Aries’ Instagram is not just dedicated to sharing her adventures; she is an advocate for the #HikeLikeACat campaign through which she aims to educate other pawrents on how they can introduce their furry felines to the world of outdoor hiking.",
      "text3" : "Aries’ adventures have captured the attention of 36k people, with a majority of her posts getting up to 800 likes. Her engagement rate is among the best in the business, making her one of the top cat influencers.",
      "img" : "img/articles/aries.jpg",
      "img2": "img/articles/photo10.png",
      "img3" : "img/articles/photo11.png"
   },
   {
      "id": "7",
      "title" : "Batman The Munchkin Cat",
      "category" : "travel",
      "text1" : "If you search the web for top cat influencers, you will find that most have unique properties such as Batman The Munchkin Cat- the cat with short legs. What might sound like a shortcoming to some has proven to be Batman's main asset.",
      "text2" : "Called Batman due to his jet-black color, this 6-year-old cat does everything a normal cat does and looks even better doing them. Munchkin is popularly known as Metal Munchkin on Instagram. This is because most of his videos feature metal music. His unique look and style have fetched him over 52k followers on Instagram.",
      "text3" : "Batman enjoys doing a lot of things including showing off unique costumes, He has over 278.2k followers on TikTok where he mainly posts short videos and has amassed over 5.8m likes. Batman is loved by a number of brands and has been sponsored by Uproot Clean, Silver Cut, Crown, and Paw.",
      "img" : "img/articles/batman-munchkin.jpg",
      "img2": "img/articles/photo12.png",
      "img3" : "img/articles/photo13.png"
   },
   {
      "id": "8",
      "title" : "Maple Cat",
      "category" : "fashion",
      "text1" : "Maple is a British Shorthair with 620k followers. He earned fame for wearing aww-worthy costumes and is now working with some big names including  Petco and Darwins Pet Food.",
      "text2" : "This LA-based cat can teach new cat influencers a lot including how to write heartwarming captions and why you should post regularly.",
      "text3" : "Maple has been sponsored by numerous brands in the UK such as Moodify Pet, Churu Treats, Republic of Cats, and others. Since most of Maple's followers are from the UK, we think he can be a great cat influencer for brands looking for a cat influencer in the UK.",
      "img" : "img/articles/maple-cat.jpg",
      "img2": "img/articles/photo14.png",
      "img3" : "img/articles/photo15.png"
   }

];

//display article details
function displayArticle(data) {
   const clickedArticle = document.querySelectorAll('.click');
   
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


//get an article
// const getArticle = async (id) => {
//    const response = await fetch (`http://localhost:5000/article/${id}`);
//    const data = await response.json();
//    displayArticle(data);

//  }


function clickArticle(e){
   const id = e.target.id;
   window.location.href = `article.html?id=${id}`;
};


article.forEach((art)=> {
   art.addEventListener('click', clickArticle);
});


function init() {
   const page = window.location.pathname;
 
   if (page.includes('article')) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get('id');
      // getArticle(id);
      displayArticle(articlesObject[id-1]);
   }

};
   

document.addEventListener('DOMContentLoaded', init);

//console.log(articlesObject[1])

// "scripts": {
//    "server": "json-server --watch db.json --port 5000"
//  },