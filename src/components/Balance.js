import React from 'react'
import { Mycontext } from './Form'

function Balance() {
    console.log("balance loaded");
    return (
        <Mycontext.Consumer>
            {
                (data) => {
                    let total = 0;
                    data.forEach((ele) => total += ele.amount);
                    return (
                        <>
                            <h4>Your Balance</h4>
                            <h1 id="balance">{total}$</h1>
                        </>
                    )
                }
            }
        </Mycontext.Consumer>
    )
}
export default Balance