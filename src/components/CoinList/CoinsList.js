import React, { Component } from 'react';
import AddCoinPair from '../../containers/AddCoinPair/AddCoinPair';

export default class CoinList extends Component {

  // Add modal to add coin collection
  render() {
    return (
      <div className="CoinList">
        <AddCoinPair />

        {this.props.coins && this.props.coins.map((c, i) => (
          <div className="coin-pair" key={i}>
            <div className="remove-pair">
              <button onClick={() => this.props.removePair(i)}>Remove</button>
            </div>
            <h1>{c.label}</h1>
            <h2>{c.data}</h2>
          </div>
        ))}
      </div>
    )
  }
}