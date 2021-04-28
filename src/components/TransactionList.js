import React from 'react'
import { Mycontext } from './Form'

function TransactionList(props) {
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <Mycontext.Consumer>
                    {
                        (data)=>{
                            return(
                                data.map((ele)=>{
                    
                                    if(ele.amount>0){
                                        return(
                                            <li key={ele.id}>
                                                <div className="plus">
                                                    <h2 className="text">{ele.text}</h2>
                                                    <h2 className="amount">{ele.amount}$</h2>
                                                    <button type="button" className="del-button" onClick={()=>props.removeTrans(ele.id)}>X</button>
                                                </div>
                                            </li>
                                        )
                                    }
                                    else{
                                        return(
                                            <li key={ele.id}>
                                                <div className="minus">
                                                    <h2 className="text">{ele.text}</h2>
                                                    <h2 className="amount">{ele.amount}$</h2>
                                                    <button type="button" className="del-button"  onClick={()=>props.removeTrans(ele.id)}>X</button>
                                                </div>
                                            </li>
                                        )
                                    }
                                })
                            )
                        }
                    }
                </Mycontext.Consumer>
            </ul>
        </>
    )
}
export default TransactionList