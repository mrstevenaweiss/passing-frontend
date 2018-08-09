import React, { Component } from 'react';
import PassingList from '../components/PassingList';

class PassingListContainer extends Component {
  render() {
    return (
      <div className="passing-list-container">
        <PassingList />
      </div>
    );
  }
}

export default PassingListContainer;
