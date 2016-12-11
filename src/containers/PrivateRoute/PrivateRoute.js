import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { redirectToLogin, saveRouteToBackRedirect } from '../../redux/modules/auth';

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  location: ownProps.location.pathname
});
const mapDispatchToProps = {
  redirectToLogin,
  saveRouteToBackRedirect
};

const privateRoute = Wrapped => connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    redirectToLogin: PropTypes.func,
    saveRouteToBackRedirect: PropTypes.func,
    location: PropTypes.string
  };

  componentDidMount() {
    this.redirectIfNotLogged(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectIfNotLogged(nextProps);
  }

  componentWillUnmount() {
    this.props.saveRouteToBackRedirect(this.props.location);
  }

  redirectIfNotLogged(props) {
    const {loading, user} = props.auth;
    if (loading === false && !user) {
      this.props.redirectToLogin();
    }
  }

  render() {
    const {loading, user} = this.props.auth;
    if (loading || !user) {
      return (
        <div className="center loader">
          <div>Loading...</div>
        </div>
      );
    }

    return <Wrapped {...this.props} />;
  }
});

export default privateRoute;
