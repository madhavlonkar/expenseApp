import React, { useState, useEffect } from 'react'
import './NewExpense.css'
import { Stack, TextField } from '@mui/material'
// import Expenses from '../Expenses/Expenses';


function ExpenseForm(props) {


    const [isVisible, setIsVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    // const [editButtonClicked,setEditButtonClicked]=useState(false)



    // console.log("My Status is ", props.buttonClicked)

    const [formData, setFormData] = useState({
        // name: props.dataToEdit.name,
        // amount: props.dataToEdit.amount,
        // date: props.dataToEdit.date
        id: 0,
        name: '',
        amount: '',
        date: ''
    });



    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setFormData({
            name: '',
            amount: '',
            date: ''
        })
        setIsEditing(false)

    };

    useEffect(() => {
        if (props.dataToEdit) {
            setFormData({
                id: props.dataToEdit.id,
                name: props.dataToEdit.name,
                amount: props.dataToEdit.amount,
                date: props.dataToEdit.date
            });
            setIsVisible(true);
            setIsEditing(true)
        }
    }, [props.dataToEdit]);

    // if (props.buttonClicked) {
    //     setIsVisible(true)
    // }

    // function settingData() {
    //     console.log("I Am Called Edit Button ")

    // setFormData({
    //     name: props.dataToEdit.name,
    //     amount: props.dataToEdit.amount,
    //     date: props.dataToEdit.date
    // })
    // let m = toggleVisibility
    // }





    const handleTitleChange = (event) => {
        const newValue = event.target.value;

        setFormData({
            ...formData,
            name: newValue
        });

        console.log("New Value :" + newValue + " Old Value : " + formData.name);
        console.log(event)
    };


    const handleAmountChange = (event) => {
        setFormData({
            ...formData,
            amount: event.target.value
        });
    };

    const handleDateChange = (event) => {
        setFormData({
            ...formData,
            date: event.target.value
        })
    };


    const handleUpdate = (event) => {
        event.preventDefault();
        // console.log("I Am Trying To Update",formData)
        props.getDataToUpdate(formData)
        setFormData({
            name: '',
            amount: '',
            date: ''
        })
        // setIsVisible(false);
        setIsEditing(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newObj = formData;
        props.onSaveExpenseDate(newObj)
        setFormData({
            name: '',
            amount: '',
            date: ''
        })

        // props.catchExpenseDate(formData)

    };

    // const expenses = [
    //     { id: 'e1', name: 'Food', amount: 500, date: '2024-03-01' },
    //     { id: 'e2', name: 'Travel', amount: 200, date: '2024-04-15' },
    //     { id: 'e3', name: 'Stay', amount: 800, date: '2024-05-20' },
    //     { id: 'e4', name: 'Groceries', amount: 300, date: '2024-06-10' }
    //   ];

    return (

        <>
            <Stack direction={'row'} justifyContent={'center'}>
                <button className="submit" id="hide-show-expense" onClick={toggleVisibility}>
                    {isVisible ? 'Hide' : 'Add Expense'}
                </button>

            </Stack>
            {isVisible &&
                <form onSubmit={handleSubmit}>

                    <div className='container shadow  rounded-3 pt-5 pb-3 px-4' style={{ maxWidth: 830 }}>
                        {/* <h4 className='m-4'>Add Expenses</h4> */}

                        {/* Expense Name and Amount Inputs */}
                        <Stack spacing={4} direction="row" justifyContent="center">
                            <TextField
                                label="Expense Name"
                                value={formData.name}
                                onChange={handleTitleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type='number'
                                fullWidth
                                value={formData.amount}
                                label="Amount"
                                onChange={handleAmountChange}
                                required
                            />
                        </Stack>

                        {/* Date Picker for Expense Date */}
                        <Stack spacing={4} direction="row" justifyContent="center" marginTop={2}>
                            <TextField
                                type='date'
                                fullWidth
                                value={formData.date}
                                onChange={handleDateChange}
                                required
                            />
                        </Stack>

                        {/* Submit Button */}
                        <Stack direction={'row'} justifyContent={'center'} marginTop={2}>


                            {isEditing ? <button className="submit" id="update-expense" onClick={handleUpdate}>
                                Update Expense
                            </button> : <button type="submit" className="submit" id="add-expense">
                                Add Expense
                            </button>}


                        </Stack>
                    </div>
                </form >
            }

        </>
    );
}

export default ExpenseForm;
