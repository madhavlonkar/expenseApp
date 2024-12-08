import React from 'react';
import Card from '../UI/Card';
import './ExepnseItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExpenseItem(props) {
  const dateObj = new Date(props.date);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  // const [title, setTitle] = useState(props.ename);

  function handleUpdate() {
    props.getDataForEdit(props.id)
  }


  const handleDelete = () => {
    props.getDataForDelete(props.id)
    // console.log()
  }

  return (
    // <Card className="expense-card">
    //   <div className="expense-date fs-5 fw-bold">{`${month} ${day}, ${year}`}</div>
    //   <div className="expense-details">
    //     {/* <span className='text-muted'>Expense Title</span> */}
    //     <h5 className="expense-name fs-5">{title}</h5>
    //     <p className="expense-amount">₹{props.amount}</p>
    //     <button className="btn btn-success update-button" onClick={handleUpdate}>
    //       Update
    //     </button>
    //   </div>
    // </Card>


    <Card className='shadow-sm content'>
      <div className="sublist-content flex-space text-start" id="858">
        <p className="product pt-4">{`${month} ${day}, ${year}`}</p>
        <p className="amount fw-bold pt-4">{props.ename}</p>
        <p className="amount pt-4 text-danger fw-bold">₹{props.amount}</p>
        <button className="fa-solid fa-pen-to-square edit" onClick={handleUpdate} style={{ fontSize: '1.2em' }}></button>
        <button className="fa-solid fa-trash-can delete" onClick={handleDelete} style={{ fontSize: '1.2em' }} ></button>
      </div>
    </Card>
  );
}
