import React, { Component } from 'react';

export default class CoinList extends Component {

  render() {
    return (
      <div className="CoinList">
        {console.log(this.props)}
        <p>{JSON.stringify(this.props.coins)}</p>
      </div>
    )
  }
}