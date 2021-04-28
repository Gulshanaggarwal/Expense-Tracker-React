import React,{useState}from 'react'
import {Mycontext} from './Form'

function IncomeExpenses() {
    console.log('component loaded incom');
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <Mycontext.Consumer>
                    {
                        (data)=>{
                             data=data.filter((ele)=>ele.amount>0);
                             let total=0;
                             data.forEach((ele)=>total+=ele.amount)
                              return(
                                <p id="money-plus" className="money plus">{total}$</p>
                              )
                        }
                        
                    }
                    
                </Mycontext.Consumer>
            </div>
            <div>
                <h4>Expense</h4>
                <Mycontext.Consumer>
                    {
                        (data)=>{
                            data=data.filter((ele)=>ele.amount<0);
                            let total=0;
                            data.forEach((ele)=>total+=ele.amount);
                            return(
                                <p id="money-minus" className="money minus">{total}$</p>
                            )
                        }
                    }
                </Mycontext.Consumer>
            </div>
        </div>
    )
}
export default IncomeExpenses