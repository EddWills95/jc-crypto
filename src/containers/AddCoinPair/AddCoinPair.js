import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import Modal from 'react-modal';

import './AddCoinPair.scss';
import Ionicon from 'react-ionicons'


Modal.setAppElement('body')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '2rem',
    minWidth: '15rem'
  }
};

export class AddCoinPair extends Component {
  constructor() {
    super();

    this.state = { 
      modalIsOpen: false,
      currency1: '',
      currency2: '',
      formValid: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.submitPair = this.submitPair.bind(this);
    this.formValid = this.formValid.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  selectChange(event) {
    const tempObj = {
      [event.target.id]: event.target.value
    }
    this.setState(tempObj);
    this.formValid();
  }

  submitPair(event) { 
    event.preventDefault();
    this.props.dispatch(actions.setPair({
      currency1: this.state.currency1,
      currency2: this.state.currency2
    }))
    this.closeModal();
  }

  formValid() {
    if(this.state.currency1 === '' || this.state.currency2 === '') {
      this.setState({ formValid: false })
    } else {
      this.setState({ formValid: true })
    }
  }

  render() {
    return(
      <div className="AddCoinPair">
        <button className="add-coin-pair-button" onClick={this.openModal}>Add Coin Pair</button>

        <Modal isOpen={this.state.modalIsOpen} style={customStyles}>
          {this.props.loading && <div className="loading-notice">
            <h1>Loading...</h1>
          </div>}
          <div className="add-coin-modal">
            <Ionicon className="modal-close" 
                     icon="ios-close" 
                     color="black" 
                     fontSize="3rem" 
                     onClick={this.closeModal}
                     />
            <form>
              <label>Currency 1</label>
              <select id="currency1" onChange={this.selectChange} value={this.state.currency1}>
                <option value=''></option>
                {this.props.allCoins && this.props.allCoins.map(c => {
                  return <option key={c.Id} disabled={c.Symbol === this.state.currency1} value={c.Symbol}>{c.Name}</option>
                })}
              </select>

              <label>Currency 2</label>
              <select id="currency2" onChange={this.selectChange} value={this.state.currency2}>
                <option value=''></option>
                {this.props.allCoins && this.props.allCoins.map(c => {
                  return <option key={c.Id} disabled={c.Symbol === this.state.currency1} value={c.Symbol}>{c.Name}</option>
                })}
              </select>

              <button disabled={this.state.formValid} onClick={this.submitPair} type="submit">Add Pair</button>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allCoins: state.coinReducer.allCoins,
    loading: state.loadingReducer.loading
  }
}

export default connect(mapStateToProps)(AddCoinPair);