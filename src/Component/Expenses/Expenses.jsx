import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
// import { Container, Row, Col } from 'react-bootstrap';
import './ExepnseItem.css';
import { Stack } from '@mui/material';
import DropdownComponent from './DropdownComponent';
import { useState } from 'react';
import BasicLineChart from '../Charts/BasicLineChart';

function Expenses(props) {

  const [year, setYear] = useState('2024');

  const handleYear = (user_year) => {
    setYear(user_year);
    // console.log("Heyy I Got The Value", user_year);
  }

  const handleData=(data)=>{
    props.getDataForDeletion(data)
    // console.log(data)
  }

  const handleEdit=(data)=>{
    // console.log("I Am Button",buttonClicked)
    props.getDataForUpdate(data);
  }

  let filteredExpenses = <p className='fw-bold text-danger'>No Data To Display (Select Correct Year From Filter)</p>

  let filteredData = props.items.filter((expense) => {
    let date = new Date(expense.date);
    return date.getFullYear().toString() === year;
  });

  if (filteredData.length > 0) {
    filteredExpenses = filteredData.map((expense) => (

      < ExpenseItem getDataForDelete={handleData} getDataForEdit={handleEdit}
        key={expense.id}
        id={expense.id}
        ename={expense.name}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  // const monthCountArr = new Array(12).fill(0); 
  // filteredData.forEach(({ date }) => monthCountArr[new Date(date).getMonth()] += 1);

  const getMonthlyExpenseCount = () => {
    const monthCount = Array(12).fill(0);
    filteredData.forEach((expense) => {
      const month = new Date(expense.date).getMonth();
      monthCount[month]++;
    });

    return monthCount.map((count, index) => ({
      month: new Date(2024, index).toLocaleString('default', { month: 'short' }),
      count,
    }));
  };

  let chartData = getMonthlyExpenseCount();

  console.log(chartData)


  
  // console.log(filteredData);
  // console.log(filteredExpenses)

  return (
    <Card className="expenses-container shadow">
      <Stack justifyContent={'center'} direction={'row'} marginTop={2}>
        <DropdownComponent selectedYear={year} getSelectedYear={handleYear} />
      </Stack>

      <BasicLineChart data={chartData} />

      <div className="list">
        <div className="list-container" id="list">
          <div className="main-sublist-content flex-space text-start">
            <p className="product fw-bold h5">Date</p>
            <p className="amount fw-bold h5">Title</p>
            <p className="amount fw-bold h5">₹Amt</p>
            <button className="fa-solid fa-pen-to-square edit" style={{ fontSize: '1.2em' }}></button>
            <button className="fa-solid fa-trash-can delete" style={{ fontSize: '1.2em' }} ></button>
          </div>
          <hr />
          {/* {filteredData.map((expense) => (
            <ExpenseItem getData={handleData}
              key={expense.id}
              id={expense.id}
              ename={expense.name}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          {filteredExpenses}
        </div>
      </div>
    </Card>
  );
}

export default Expenses;