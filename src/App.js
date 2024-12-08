import React, { useState } from 'react';
import Expenses from './Component/Expenses/Expenses';
import './App.css'
import NewExpense from './Component/NewExpense/NewExpense';

function App() {
  let expenses = [
    { id: 'e1', name: 'Food', amount: 500, date: '2024-03-01' },
    { id: 'e2', name: 'Travel', amount: 200, date: '2024-04-15' },
    { id: 'e3', name: 'Stay', amount: 800, date: '2023-05-20' }
  ];


  const [exp, setExp] = useState(expenses);
  const [dataForUpdate1, setDataForUpdate1] = useState()
  // const [editButtonClicked,setEditButtonClicked]=useState(false)

  const handleData = (data) => {


    setExp((exp) => [...exp, data])
    // setExp((exp) => [...exp])
    // expenses.push(data);

    // expenses=exp;

    // console.log(data)
    // console.log(expenses)
  }

  const handleDeleteOperation = (objid) => {
    let index = exp.findIndex(x => x.id === objid);
    const newArray = exp.filter((element, currentindex) => currentindex !== index);
    // let newArray=exp.splice(index,1)
    setExp(newArray)
  }

  const handleUpdateOperation = (objid) => {

    let index = exp.findIndex(x => x.id === objid);
    setDataForUpdate1(exp[index])



    // setEditButtonClicked(buttonClicked);

    // console.log(expenseToEdit)
  }


  // console.log("I am In App Js",editButtonClicked)
  const handleEdit = (data) => {

    let index = exp.findIndex(x => x.id === data.id);

    exp[index] = data
    //  console.log(exp)
    let newArray = [...exp]
    console.log(newArray)
    setExp(newArray)
    // setExp(newArray)
    // console.log(newArray)
    // console.log(exp)
    // setExp()
    // console.log("I Am In App js With",index)
  }

  return (
    //buttonClicked={editButtonClicked}
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      {/* <h2 className="mt-5 text-center fw-bold ">Expense Tracker</h2> */}
      <h3 className='text-center pt-5 fw-bold'>Expenses Tracker</h3>

      <div className="app">

        <NewExpense catchExpenseDate={handleData} dataForUpdate={dataForUpdate1} handleEditOpeartion={handleEdit} />

        <Expenses items={exp} getDataForDeletion={handleDeleteOperation} getDataForUpdate={handleUpdateOperation} />

      </div>
    </>

  );
}

export default App;
