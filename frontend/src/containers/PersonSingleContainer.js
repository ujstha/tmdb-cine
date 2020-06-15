import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/helper-components/Loader';
import { personAction } from '../actions/personsAction';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { PersonSingle } from '../components/person-components/PersonSingle';
import { backgroundImg } from '../components/helper-components/PosterImage';

class PersonSingleContainer extends Component {
  componentDidMount() {
    this.props.personAction(this.props.match.params.personID);
  }
  render() {
    const { isLoading, person } = this.props;

    return isLoading ? (
      <Loader />
    ) : person ? (
      <div
        className='person__single-wrapper'
        style={{ backgroundImage: backgroundImg(person) }}
      >
        <div className='person__single-wrapper-overlay'></div>
        <PersonSingle person={person} />
      </div>
    ) : (
      <ZeroResult message='Something went wrong !' />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.person.isLoading,
  person: state.person.person.data,
});
export default connect(mapStateToProps, { personAction })(
  PersonSingleContainer
);
