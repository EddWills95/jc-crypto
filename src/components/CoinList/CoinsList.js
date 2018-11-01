import React, { Component } from 'react';
import AddCoinPair from '../../containers/AddCoinPair/AddCoinPair';

export default class CoinList extends Component {

  // Add modal to add coin collection

  render() {
    return (
      <div className="CoinList">
        <AddCoinPair />

        {this.props.coins && this.props.coins.map(c => (
          <p key={c.Id}>{c.CoinName}</p>
        ))}
      </div>
    )
  }
}