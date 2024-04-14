/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

function AccountBalance(props) {
    console.log(props)
    
    //calculate account balance by subtracting all debts from user's credit   Math.round(num * 100) / 100
    const calculateBalance = () => {
      let sum = 0.00;
  
      props.creditList.forEach( credit => {
        sum += credit;
      })
  
      props.debitList.forEach( debit => {
        sum -= debit;
      })
      return sum;
      //this.props.setAccountBalance(sum);
    }

  // Display account balance
   {
    calculateBalance()
    //console.log(calculateBalance())
    return (
      <div>
        Balance: {calculateBalance()}
      </div>
    );
  }
}

export default AccountBalance;