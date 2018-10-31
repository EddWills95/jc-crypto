import React, { Component } from 'react';

export default class AddPair extends Component {

  addPairModal() { 
    console.log('should show modal of pairs');
    // Prevent default
  }

  render() {
    return (
      <div className="add-pair-button">
        <button onClick={this.addPairModal}>Add Crypto Pair</button>
      </div>
    )
  }
}