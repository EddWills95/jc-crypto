import React, { Component } from 'react';

export default class Dashboard extends Component {

  render() {
    return(
      <div className="Dashboard">
        <div id="add-pair">

        </div>

        {this.props.children}
      </div>
    )
  }

}