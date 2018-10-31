import React, { Component } from 'react';
import AddPair from '../add-pair/AddPair';

export default class Dashboard extends Component {

  render() {
    return(
      <div className="Dashboard">
        <AddPair />

        {this.props.children}
      </div>
    )
  }

}