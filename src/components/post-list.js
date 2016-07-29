import React from 'react';

import Post from "./post";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts : []
    }
  }

  // @see https://facebook.github.io/react/tips/initial-ajax.html
  componentDidMount() {
    this._getPosts();
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  _getPosts() {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/posts?number=5';

    this.serverRequest = $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        this.setState({ posts: data.posts });
      }.bind(this),
      error: function(xhr, status, err) {
          this.setState({ posts: null });
          console.error(status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="river-main">
        <div className="latest">
          <h2 className="title">Latest</h2>
        </div>
        <ul className="river">
          {this.state.posts.map(post => {
            return <Post key={post.ID} id={post.ID} author={post.author.name} title={post.title}  />;
         })}
        </ul>
      </div>
    )
  }
}

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object)
}

PostList.defaultProps = {
  posts: []
}

export default PostList;