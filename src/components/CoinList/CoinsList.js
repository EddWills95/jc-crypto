import React, { Component } from 'react';

export default class CoinList extends Component {

  render() {
    return (
      <div className="CoinList">
        {this.props.coins && this.props.coins.map(c => (
          <p key={c.id}>{c.CoinName}</p>
        ))}
      </div>
    )
  }
}