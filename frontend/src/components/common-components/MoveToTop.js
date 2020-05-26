import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { moveToTop } from '../../services/goToUrl';

class MoveToTop extends Component {
  state = {
    showMoveToTop: false,
  };
  componentDidMount() {
    document.addEventListener('scroll', this.toggleMoveToTop);
  }
  toggleMoveToTop = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        showMoveToTop: true,
      });
    } else {
      this.setState({
        showMoveToTop: false,
      });
    }
  };
  render() {
    const { showMoveToTop } = this.state;
    return (
      showMoveToTop && (
        <div className='move-to-top'>
          <IconButton onClick={() => moveToTop()}>
            <i className='fa fa-arrow-up' />
          </IconButton>
        </div>
      )
    );
  }
}

export default MoveToTop;
