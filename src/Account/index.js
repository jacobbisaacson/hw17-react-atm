import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super()
    this.ref1 = React.createRef()
    this.state = {
      balance: 0
    }
  }
  render() {
    console.log(this.ref1);
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input 
          type="text"
          ref={this.ref1}
          placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}










export default Account;
