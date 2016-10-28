import React from 'react';
import { postRequest } from '../utilities/ajax';


class AddPostForm extends React.Component {

  createPost(event) {
    event.preventDefault();
    const post = {
      title: this.title.value,
      body: this.body.value
    }
    this._submitPostFor(post);
  }

  _submitPostFor = async (post) => {
    const url = `/api/v1/posts`;
    const response = await postRequest(url, post);
    if (response && response.ok) {
      this.props.addPostToArray(post);
      this.postForm.reset();
    }
  }


  render() {
    return (
      <form ref={(input) => this.postForm = input} onSubmit={(e) => this.createPost(e)}>
        <input ref={(input) => this.title = input} type='text' placeholder='Post Title'/>
        <textarea ref={(input) => this.body = input} placeholder='Your Text'></textarea>
        <button type='submit'>Add Post</button>
      </form>
    )
  }
}

export default AddPostForm;
