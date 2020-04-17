import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super()
    this.ref1 = React.createRef()
    this.state = {
      balance: 10
    }
  }

  handleClick = (event) => {
    let withdrawMoney = parseFloat(this.ref1.value)
    console.log(withdrawMoney);
    // console.log("handling click");
    // console.log(event.target);
    let balance = this.state.balance
    if(event.target.value == "Deposit") {
      balance += withdrawMoney
    } else if(event.target.value == "Withdraw") {
      balance -= withdrawMoney
    }

    this.setState({
      balance: balance
    })
  }

  render() {
    // console.log(this.ref1);
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input 
          type="text"
          ref={this.ref1}
          placeholder="enter an amount" />
        <input 
          type="button" 
          onClick={this.handleClick} 
          value="Deposit" />
        <input 
          type="button" 
          onClick={this.handleClilck} 
          value="Withdraw" />
      </div>
    )
  }
}










export default Account;
