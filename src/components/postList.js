import PostsApi from "../services/postsApi";

class PostList{
   constructor() {
      this._postListEl = document.querySelector('#blogItems');
      this._modifyBtn = document.querySelector('#edit-posts');
      this._posts = [];
      this.getPosts();
   }

   addEventListeners(){
      this._postListEl.addEventListener('click', (e)=> {
         if(e.target.classList.contains('fa-trash-can')) {
            e.stopImmediatePropagation();
            const postId = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
            this.deletePost(postId);
         }
      });
      this._modifyBtn.addEventListener('click', this.displayEdit);
   }

   async getPosts(){
      try {
         const res = await PostsApi.getPosts();
         this._posts = res.data.data;
         this.render();
      } catch (error) {
         console.log(error)
      }
   }

   async deletePost(postId) {
      try {
         //delete from server
         const res = await PostsApi.deletePost(postId);
         this._posts.filter((post)=>{
            post._id !== postId
         });
         this.getPosts;
         window.location.reload();
      }
      catch (error) {
         alert('You can not delete this resource')
      }
   }

   addPostToList (post) {
      this._posts.push(post);
      this.render();
   }

   getTagClass(tag) {
      tag = tag.toLowerCase();
      let tagClass = '';

      tagClass = `category-${tag}`;

      return tagClass;
   }

   displayEdit () {
      const allEditButtons = [...document.querySelectorAll('.btn-edit')];
      allEditButtons.map((btn) => {
         if (btn.style.display == 'none') {
            btn.style.display = 'inline-block';
         } else {
            btn.style.display = 'none';
         }
      });
   }

   render() {
      this._postListEl.innerHTML = this._posts.toReversed().map((post) => {
         const tagClass = this.getTagClass(post.tag);
         let deleteBtn;
         if (post.username !== localStorage.getItem('username') || post.username === 'timo') {
            deleteBtn = ''
         } else {
            deleteBtn = `<button class="btn-delete delete"><i class="fa-solid fa-trash-can fa-lg" style="color: #e23232;"></i></button>`;
         }
         return `
         <div class="blogItem" data-id="${post._id}">
                  <div class="post-title"> 
                     <h1>${post.title}</h1>
                     <div>
                        <button class="btn-edit edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: #cc8b00;"></i></button>
                        ${deleteBtn}
                     </div>
                  </div>
                  <div class="meta">
                     <small>
                        Written by ${post.username.toUpperCase()} - ${post.date.slice(0,10)}
                     </small>
                     <div class="category ${tagClass}">${post.tag.toUpperCase()}</div>
                  </div>
                  <div class="blogText" style="white-space: pre-line">
                     ${post.text}
                  </div>
         </div>
         `;
      }).join('');

      this.addEventListeners();
   }
}

export default PostList;
