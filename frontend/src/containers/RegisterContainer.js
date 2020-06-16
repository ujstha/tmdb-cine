import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../actions/usersAction';
import { getData } from '../services/inputToJson';
import { goToUrl } from '../services/goToUrl';
import HeadTitle from '../components/helper-components/HeadTitle';
import { UserAuthentication } from '../components/authentication-components/UserAuthentication';

class RegisterContainer extends Component {
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
    this.props.registerAction(this.state.dataObj);
  };
  render() {
    const { isLoading, success, error } = this.props;
    const { firstname, lastname, username, password } = this.state.dataObj;
    success && setTimeout(() => goToUrl(`/auth/login`), 1500);
    return (
      <>
        <HeadTitle title='Register Page' />
        <UserAuthentication
          isLoading={isLoading}
          formTitle='Join Us'
          urlType='register'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          success={success}
          error={error}
          disabled={
            firstname && lastname && username && password && !isLoading
              ? false
              : true
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.register.isLoading,
  error: state.register.error,
  success: state.register.success,
});

export default connect(mapStateToProps, { registerAction })(RegisterContainer);
