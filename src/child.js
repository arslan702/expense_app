import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';

function Child(){

let {transactions,addTransaction}=useContext(TransactionContext);
let [newDesc, setDesc]=useState('');
let [newAmount,setAmount]=useState(0);
const handleAddition=(event)=>{
    event.preventDefault();
    addTransaction({
        amount: newAmount,
        desc: newDesc
    })
}
const getIncome=()=>{
    let income=0;
    for(var i=0;i<transactions.length;i++){
        if(transactions[i].amount>0)
        income+=transactions[i].amount
    }
    return income;
}
const getExpense=()=>{
    let expense=0;
    for(var i=0;i<transactions.length;i++){
        if(transactions[i].amount<0)
        expense+=transactions[i].amount
    }
    return expense;
}

return( 
    <div className="container">
        <h1 className="text">EXPENSE TRACKER</h1>
        <h3>Your Balance<br/>{getIncome() + getExpense()}</h3>

        <div className="trans-cont">
        <h3>INCOME<br/>{getIncome()}</h3>
        <h3>EXPENSE<br/>{getExpense()}</h3>
        </div>
        <h3>History</h3>
        <hr/>
        <ul className="trans-list">
        {transactions.map((transobj,ind) => {
            return(
                <li>
                <span>{transobj.desc}</span>
            <span>{transobj.amount}</span>
            </li>
            )
        }
        )}
        </ul>
        <h3>Add New Transaction</h3>
        <hr/>
        <form className="form" onSubmit={handleAddition}>
            <label>
                Enter Description<br/>
                <input type="text" onChange={(ev)=>setDesc(ev.target.value)}required/>
            </label><br/>
            <label>
                Enter Amount<br/>
                <input type="number" onChange={(ev)=>setAmount(ev.target.value)}required/>
            </label><br/><br/>
            <input className="last" type="submit" value="Add Transaction"/>
        </form>
    </div>
    )
}

export default Child;