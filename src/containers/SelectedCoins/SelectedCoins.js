import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedCoins.scss';
import CoinList from '../../components/CoinList/CoinsList';
import * as actions from '../../store/actions';


class SelectedCoins extends Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchCoins());
  }

  render() {
    return (
      <div>
        <h2>My Favourite Coins</h2>
        <CoinList coins={this.props.selectedPairs} />
      </div>
    );
  }
}

// which props do we want to inject, given the global store state?
// Could use a selector for bigger app
// This should be propgating down

function mapStateToProps(state) {
  return {
    selectedPairs: state.coinReducer.selectedPairs
  };
}

export default connect(mapStateToProps)(SelectedCoins);