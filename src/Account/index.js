import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super()
    this.ref1 = React.createRef()
    this.state = {
      balance: 100
    }
  }

  handleClick = (event) => {
    let money = parseFloat(this.ref1.current.value)
    let balance = this.state.balance

    if(event.target.value === "Deposit") {
      balance += money
    } else if(event.target.value === "Withdraw") {
      if (money > balance) {
        } else {
          balance -= money
        }
      }

    this.setState({
      balance: balance
    })
  }

  render() {
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
          onClick={this.handleClick} 
          value="Withdraw" />
      </div>
    )
  }
}










export default Account;
