import axios from 'axios';


class PostsApi {
   constructor(){
      this._apiUrl = `/api/posts`;
   }

   getPosts(){
      return axios.get(this._apiUrl);
   }

   createPost(data) {
      return axios.post(this._apiUrl, data);
   }

   updatePost(id, data) {
      return axios.put(`${this._apiUrl}/${id}`, data);
   }

   deletePost(id) {
      const username = localStorage.getItem('username') ?
      localStorage.getItem('username') : '';
      return axios.delete(`${this._apiUrl}/${id}`, {
         data: {
            username,
         }
      });
   }
}

export default new PostsApi();