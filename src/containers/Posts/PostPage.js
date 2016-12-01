import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import objectAssign from 'object-assign';
import DisqusThread from 'react-disqus-thread';
import { asyncConnect } from 'redux-async-connect';
import { getById } from '../../selector/selectors';
import * as Empty from '../../constants/emptyEntities';
import BlogPost from '../../common/BlogPost';
import * as postActions from '../../redux/modules/posts';
import * as authorsAction from '../../redux/modules/authors';

@asyncConnect([{
  deferred: true,
  promise: ({ store: { dispatch } }) => dispatch(postActions.loadPosts())
}, {
  deffered: true,
  promise: ({ store: { dispatch } }) => dispatch(authorsAction.loadAuthors())
}])

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
  const postId = ownProps.params.id;
  let post = Empty.POST;

  if (postId && state.posts.length > 0) {
    post = getById(state.posts, postId);
  }

  return {
    post,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
