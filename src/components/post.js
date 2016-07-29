import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1 className="author">{this.props.title}</h1>
        <span className="author">{this.props.author}</span>
        <span className="post_id">{this.props.id}</span>
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

export default Post;