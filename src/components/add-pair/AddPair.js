import React, { Component } from 'react';

export default class AddPair extends Component {




  addPairModal() { 
    console.log('should show modal of pairs');
    preventDefault();
  }

  render() {
    return (
      <div className="add-pair-button">
        <button onClick={this.addPairModal} />
      </div>
    )
  }
}