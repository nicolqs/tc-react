import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  // https://facebook.github.io/react/tips/dangerously-set-inner-html.html just to test for now
  createMarkup(html) {
    return {__html: html};
  }
  readableDate(date) {
    return date.substr(0, 10).replace(/-/g, ' ');
  }
  render() {
    const post = this.props.post;
    return (
      <li className="story-block">
        <time datetime={post.date}>{this.readableDate(post.date)}</time>
        <a href={post.URL} className="thumb">
          <div className="story-category-container">
            <div className="story-category">Apps</div>
          </div>
          <img src={post.featured_image + '?w=180&h=150&crop=1&quality=85&strip=all'} className="thumbimg" />
        </a>
        <div className="story-container">
          <h3 className="author">
            <a href={post.URL}>{post.title}</a>
          </h3>
          <div className="story-byline">
            By <span className="author">{post.author.name}</span>
          </div>
          <p className="excerpt" dangerouslySetInnerHTML={this.createMarkup(post.excerpt)} ></p>
        </div>
      </li>
    )
  }
}

Post.defaultProps = {
  post: []
};

Post.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Post;