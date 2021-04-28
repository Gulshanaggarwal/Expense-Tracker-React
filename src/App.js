import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import Form from './components/Form'
import './App.css'
import { Mycontext } from './components/Form'
function App() {
  console.log("app loaded");
  let [transactions, setTrans] = useState(JSON.parse(localStorage.getItem('key'))!=null ?JSON.parse(localStorage.getItem('key')) :[]);
  
  function addTask(transaction) {
    setTrans([...transactions,transaction]);
    localStorage.setItem('key',JSON.stringify([...transactions,transaction]))
  }
  function removeTrans(id){
    setTrans(transactions.filter((ele)=>ele.id!=id));
    localStorage.setItem('key',JSON.stringify(transactions.filter((ele)=>ele.id!=id)));

  }

  return (
    <div>
      <Header />
      <div className="container">
        <Mycontext.Provider value={transactions}>
          <Balance />
          <IncomeExpenses />
          <TransactionList removeTrans={removeTrans}/>
        </Mycontext.Provider>
        
        <Form addTask={addTask} />
      </div>
    </div>
  )
}
export default App