import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/usersAction';
import { getData } from '../services/inputToJson';
import { goToUrl } from '../services/goToUrl';
import { UserAuthentication } from '../components/authentication-components/UserAuthentication';
import HeadTitle from '../components/helper-components/HeadTitle';

class LoginContainer extends Component {
  state = {
    dataObj: {},
  };
  onChange = () => {
    const data = getData('json');
    this.setState({
      dataObj: data,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginAction(this.state.dataObj);
  };
  render() {
    const { isLoading, authToken, error } = this.props;
    const { username, password } = this.state.dataObj;
    authToken && localStorage.setItem('authToken', authToken);
    authToken && goToUrl(`/user/dashboard`);
    return (
      <>
        <HeadTitle title='Login Page' />
        <UserAuthentication
          isLoading={isLoading}
          formTitle='Login'
          urlType='login'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          error={error}
          disabled={username && password && !isLoading ? false : true}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  error: state.login.error,
  authToken: state.login.authToken,
});

export default connect(mapStateToProps, { loginAction })(LoginContainer);
