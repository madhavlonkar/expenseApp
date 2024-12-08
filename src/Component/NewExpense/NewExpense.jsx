import React from 'react'
import ExpenseForm from './ExpenseForm'


function NewExpense(props) {

    const handleExpenseDate=(data)=>{
        
        const expenseData={
            ...data,
            id:Math.random() * 10,
            
           
        }

        console.log("New Expense IS ",expenseData)

        props.catchExpenseDate(expenseData)
    }

    const handleUpdateOperation=(data)=>{
        props.handleEditOpeartion(data)
        // console.log("I Am In New Expense With",data)
    }

    // console.log("I Am In New Expense",props.buttonClicked)
    // console.log("I Am in New Expense ",props.dataForUpdate);

    return (
        //buttonClicked={props.buttonClicked}
        <ExpenseForm onSaveExpenseDate={handleExpenseDate} dataToEdit={props.dataForUpdate} getDataToUpdate={handleUpdateOperation}/>
    )
}

export default NewExpense
