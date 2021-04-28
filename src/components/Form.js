import React, { useState, } from 'react'
export const Mycontext=React.createContext();

function Form(props) {
    const [itemText, setitemText] = useState('');
    const [itemAmount, setitemAmount] = useState(0);
    const [id, setId] = useState(0);
    console.log('form loaded');

    function generateId() {
        return Math.floor((Math.random() * 10000) + 1);
    }

    function addTransaction(event) {
        event.preventDefault();
        if(itemText.trim()=="" || itemAmount.trim()==""){
            alert("Either Item or Amount invalid!");
        }
        else{
            setId(generateId());
       let transaction={
           id:generateId(),
           text:itemText,
           amount :parseInt(itemAmount)
       }
        props.addTask(transaction);
        }
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={addTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={itemText} placeholder="Enter text..." onChange={(event) => setitemText(event.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number" value={itemAmount} id="amount" placeholder="Enter amount..." onChange={(event) => setitemAmount(event.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
export default Form