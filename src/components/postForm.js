import PostsApi from "../services/postsApi";
import PostList from './postList'

class PostForm {
   constructor(){
      this._formModal = document.querySelector('#form-modal');
      this._postList = new PostList();
   }

   addEventListeners(){
      this._form.addEventListener('submit', this.handleSubmit.bind(this));
   }

   async handleSubmit(e) {
      e.preventDefault();

      if (!this._form.elements.title.value ||  !this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value) {
         alert('Please fill in all information')
         return;
      }

      //save user to local storage
      localStorage.setItem('username', this._form.elements.username.value)

      const post = {
         title: this._form.elements.title.value,
         text: this._form.elements.text.value,
         tag: this._form.elements.tag.value,
         username: this._form.elements.username.value,
      }

      //Add post to server
      const newPost = await PostsApi.createPost(post);

      //add post to list
      this._postList.addPostToList(newPost.data.data);

      //clear fields
      this._form.elements.title.value = ''
      this._form.elements.text.value = ''
      this._form.elements.tag.value = ''
      this._form.elements.username.value = ''

      this.render();

      document.dispatchEvent(new Event('closemodal'))
   }

   render() {
      this._formModal.innerHTML = `
      <form id="post-form">
          <div class="form-control">
            <label for="post-text">Enter a Username</label>
            <input type="text" name="username" id="username" value="${localStorage.getItem('username') ? localStorage.getItem('username') : ''}"/>
          </div>
          <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div class="form-control">
            <label for="post-text">What's Your Post?</label>
            <textarea name="text" id="post-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Category</label>
            <select name="tag" id="tag" required>
               <option value="" disabled selected>-- Please choose a category --</option>
               <option value="nutrition">Nutrition</option>
               <option value="leisure">Leisure</option>
               <option value="grooming">Grooming</option>
               <option value="behavior">Behavior</option>
               <option value="other">Other</option>
            </select>
          </div>
          <button class="btn btn-primary form-btn" type="submit" id="submit">Submit</button>
        </form>
      `;

      this._form = document.querySelector('#post-form');
      this.addEventListeners();
   }
}

export default PostForm;