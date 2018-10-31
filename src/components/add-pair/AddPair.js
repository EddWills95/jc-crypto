import React, { Component } from 'react';
import Modal from 'react-modal';
import AddPairModal from './AddPairModal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body');

export default class AddPair extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      allCoinsData: null,
      selections: {
        first: '',
        second: ''
      }
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div className="add-pair-button">
        <button className="add-modal-button" onClick={this.openModal}>Add Crypto Pair</button>
        <Modal isOpen={this.state.modalIsOpen} style={customStyles} >

          <div className="add-modal">
            <button onClick={this.closeModal}>close</button>

            <h1>Add Crypto-Currency Pair</h1>
            <AddPairModal />
          </div>
        </Modal>
      </div>
    )
  }
}