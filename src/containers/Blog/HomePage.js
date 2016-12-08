import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePageRow from './HomePageRow';
import BlogHeader from '../../components/BlogPost/BlogHeader';
import * as postsActions from '../../redux/modules/posts';
import { sortNewPostsFirstSelector } from '../../selector/selectors';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <BlogHeader />
        <HomePageRow posts={this.props.posts} />
      </div>
    );
  }
}


HomePage.propTypes = {
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    posts: sortNewPostsFirstSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
