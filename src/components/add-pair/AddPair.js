import React, { Component } from 'react';
import Modal from 'react-modal';

export default class AddPair extends Component {

  constructor(props) {
    super(props);

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
    return (
      <div className="add-pair-button">
        <button onClick={this.openModal}>Add Crypto Pair</button>
        <Modal isOpen={this.state.modalIsOpen}>
          <div className="add-modal">
            <button onClick={this.closeModal}>close</button>

            <h1>Tis is a modal</h1>
          </div>
        </Modal>
      </div>
    )
  }
}