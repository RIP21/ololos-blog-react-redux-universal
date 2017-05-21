import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { provideHooks } from "redial";
import { BlogPost } from "../../components";
import { sortNewPostsFirstSelector } from "../../selector/selectors";
import { loadAuthorsAndPosts } from "../../helpers/fetching";

@provideHooks({
  fetch: ({ dispatch, getState }) => {
    return loadAuthorsAndPosts(dispatch, getState);
  },
  defer: ({ dispatch, getState }) => {
    return loadAuthorsAndPosts(dispatch, getState);
  }
})
class Home extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  render() {
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Ололось блог" />
        {this.props.posts.map(post => (post.published ? <BlogPost key={post.id} post={post} /> : null))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: sortNewPostsFirstSelector(state)
  };
}

export default connect(mapStateToProps, {})(Home);
