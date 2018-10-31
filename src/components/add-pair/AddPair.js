import React, { Component } from 'react';
import Modal from 'react-modal';

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

const possibleCurrencies = ['', 'BTC', 'LTC', 'DOGE'];

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
    this.selectCurrency = this.selectCurrency.bind(this);
  }

  openModal() {
    // call api

    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  selectCurrency (event) {
    this.setState({ selections: {
      ...this.state.selections,
      [event.target.id]: event.target.value 
    }}, () => console.log(this.state));
  }

  render() {
    return (
      <div className="add-pair-button">
        <button className="add-modal-button" onClick={this.openModal}>Add Crypto Pair</button>
        <Modal isOpen={this.state.modalIsOpen} style={customStyles} >
          <div className="add-modal">
            <button onClick={this.closeModal}>close</button>

            <h1>Add Crypto-Currency Pair</h1>

            <form>
              <label>Currency 1</label>
              <select id="first" onChange={this.selectCurrency} value={this.state.selections.first}>
                {possibleCurrencies.map((name, i) => {
                  return <option key={i} value={name}>{name}</option>
                })}
              </select>
              
              <label>Currency 2</label>
              <select id="second" onChange={this.selectCurrency} value={this.state.selections.second}>
                {possibleCurrencies.map((name, i) => {
                  return <option key={i} value={name} disabled={name === this.state.selections.first}>{name}</option>
                })}
              </select>
            </form>

            

          </div>
        </Modal>
      </div>
    )
  }
}