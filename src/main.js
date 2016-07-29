import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
window.jQuery = window.$ = $;


class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <span>{this.props.author}</span>
        <span>{this.props.id}</span>
      </div>
    )
  }
}

Post.defaultProps = {
  id: 0,
  author: '',
  title: ''
};

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  author: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};


class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    this._getPosts();
  }

  _getPosts() {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/posts?number=5';

    this.state.posts = $.ajax({
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
      <div>
        {this.state.posts.map(post => {
           return <Post key={post.ID} id={post.ID} author="{post.author}" title={post.title}  />;
        })}
      </div>
    )
  }
}

ReactDOM.render(<Posts />, document.querySelector('#main'));