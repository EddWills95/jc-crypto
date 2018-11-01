import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';

Modal.setAppElement('body')

class AddCoinPair extends Component {

  constructor() {
    super();

    this.state = { 
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div className="AddCoinPair">
        <button onClick={this.openModal}>Add Coin Pair</button>

        <Modal isOpen={this.state.modalIsOpen}>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    coins: state.allCoins
  }
}

export default connect(mapStateToProps)(AddCoinPair);