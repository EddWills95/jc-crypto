import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedCoins.scss';
import CoinList from '../../components/CoinList/CoinsList';
import * as actions from '../../store/actions';


export class SelectedCoins extends Component {

  constructor() {
    super()

    this.removePair = this.removePair.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(actions.fetchCoins());
  }

  removePair(index) {
    this.props.dispatch(actions.removePair(index));
  }

  render() {
    return (
      <div className="SelectedCoins">
        <h2>My Favourite Coins</h2>
        {this.props.loading && <div className="loading-notice">
          <h1>LOADING...</h1>
        </div>}

        <CoinList coins={this.props.selectedPairs} removePair={this.removePair} />
      </div>
    );
  }
}

// which props do we want to inject, given the global store state?
// Could use a selector for bigger app
// This should be propgating down

function mapStateToProps(state) {
  return {
    selectedPairs: state.coinReducer.selectedPairs,
    loading: state.loadingReducer.loading
  };
}

export default connect(mapStateToProps)(SelectedCoins);