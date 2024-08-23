import PostsApi from "../services/postsApi";

class PostList{
   constructor() {
      this._postListEl = document.querySelector('#blogItems')
      this._posts = [];
      this.getPosts();
   }

   addEventListeners(){
      this._postListEl.addEventListener('click', (e)=> {
         if(e.target.classList.contains('fa-times')) {
            e.stopImmediatePropagation();
            const postId = e.target.parentElement.parentElement.dataset.id;
            this.deleteIdea(postId);
         }
      })
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

      tagClass = `tag-${tag}`;

      return tagClass;
   }

   render() {
      this._postListEl.innerHTML = this._posts.map((post) => {
         const tagClass = this.getTagClass(post.tag);
         const deleteBtn = post.username === localStorage.getItem('username') ? `<button class="delete"><i class="fas fa-times"></i></button>` : '';
         return `
         <div class="card" data-id="${post._id}">
         ${deleteBtn}          
          <h3>
            ${post.text}
          </h3>
          <p class="tag ${tagClass}">${post.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${post.date}</span> by
            <span class="author">${post.username}</span>
          </p>
        </div>
         `;
      }).join('');

      this.addEventListeners();
   }
}

export default PostList;