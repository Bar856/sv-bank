import React from 'react'

export default function Expense(props) {
  return (
    <div className='row' style={{'fontSize':'25px'}}>
        <div className='col'>{props.expense.company}</div>
        <div className='col'>{props.expense.price}</div>
        <div className='col' >
            <button onClick={()=>props.deleteExpense(props.id,props.custId)} style={{'width':'50px'}} className='redBg'>X</button>
        </div>
    </div>
  )
}
