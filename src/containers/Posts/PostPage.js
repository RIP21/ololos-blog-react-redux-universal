import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import objectAssign from 'object-assign';
import DisqusThread from 'react-disqus-thread';
import { getById } from '../../selector/selectors';
import * as Empty from '../../constants/emptyEntities';
import BlogPost from '../../components/BlogPost/BlogPost';
import * as postActions from '../../redux/modules/posts';

class PostPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: objectAssign({}, props.post),
    };
  }

  render() {
    return (
      <div className="blog-main">
        <BlogPost post={this.state.post} open />
        <DisqusThread
          shortname="ololos"
          identifier={this.props.post.id}
          title={this.props.post.title}
        />
      </div>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
};


function mapStateToProps(state, ownProps) {
  const {posts} = state.posts;
  const postId = ownProps.params.id;
  let post = Empty.POST;

  if (postId && posts.length > 0) {
    post = getById(posts, postId);
  }

  return {
    post,
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
