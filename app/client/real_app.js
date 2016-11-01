import React, { Component } from 'react';
import { getRequest } from './utilities/ajax';
import AddPostForm from './components/AddPostForm'

class RealApp extends Component {

  // state = (() => {
  //   return {
  //     posts: []
  //   }
  // })();

  state = {
    posts: []
  };

  _getPosts = async () => {
    const url = `/api/v1/posts`;
    const response = await getRequest(url);
    if (response && response.ok) {
      const {
        posts,
      } = {} = response.body;
      this.setState({
        posts,
      });
    }
  }

  _buildPost = ({
    id,
    title,
    body
  }
, index) => {
    return (
      <div key={id} >
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }

  addPostToArray = (post) => {
    const posts = [ ...this.state.posts ];
    // posts.push(post);
    posts.push(post);
    this.setState( {posts, } );
  }

  updatePostToArray = (key, updatedPost) => {
    const posts = [...this.state.posts];
    posts[key] = updatedPost;
    this.setState({posts, });
  }

  updatePosts = (e) => {
    e.preventDefault();
      this.state.posts.length > 0 ?
        this.setState({
          posts: [],
        })
      :
        this._getPosts();
  }

  componentWillMount() {
    this._getPosts();
  }

  render () {
    return (
      <div >
        <AddPostForm
         posts={this.state.posts}
         addPostToArray={this.addPostToArray} updatePost={this.updatePostToArray}/>
        {/* <h1>
          {this.state.posts.map((post) =>
            (this._buildPost(post)))}
        </h1> */}
        <h1>
          Click the button to get the posts, click again to clear.
        </h1>
        <button onClick={this.updatePosts}>
          Click Me!
        </button>
        {this.state.posts.map(this._buildPost).reverse()}

      </div>
    );
  }
}

export default RealApp;
