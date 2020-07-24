import React from 'react'
// import axios from 'axios'
// import * as yup from 'yup'
// import formSchema from '../validation/FormSchema'
// import Pizza from './Pizza'

const Form = (props) => {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        errors,
        disabled,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }

      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
        <div className='form container' onSubmit={onSubmit}>
            <div id='formheader'>
            <h2>Build Your Own Pizza</h2>

            <div>
                <h3>Please complete this form to continue:</h3>
            </div>

            <div className='register-form inputs'>
                <div id='inputBoxes'className='input-box'>
                <label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <p id='user-error'>{errors.name}</p>
                </div>

                <div id='dropBoxes'className='inputDrop-box'></div>
                <label>Choice of Sauce:&nbsp;
                    <select id='sauces-dropdown'
                        onChange={onInputChange}
                        value={values.sauces}
                        name='sauces'
                    >
                        <option value=''>- Select a sauce-</option>
                        <option value='marinara'>marinara</option>
                        <option value='pesto'>Pesto</option>
                        <option value='clam'>Clam</option>
                        <option value='white garlic'>White Garlic</option>
                    </select>
                </label>
                <p id='sauces-error'>{errors.sauces}</p>
                </div>

                <div id='dropBoxes'className='inputDrop-box'></div>
                <label>Choose a Topping:&nbsp;
                    <select id='topping-dropdown'
                        onChange={onInputChange}
                        value={values.toppings}
                        name='toppings'
                    >
                        <option value=''>- Select a Topping-</option>
                        <option value='cheese'>marinara</option>
                        <option value='pepperoni'>Pepperoni</option>
                        <option value='clams'>Clams</option>
                        <option value='ricotta'>Ricotta</option>
                    </select>
                </label>
                <p id='toppings-error'>{errors.toppings}</p>
                </div>

                <div id='inputBoxes'className='input-box'>
                <label>Special Instructions:&nbsp;
                    <input
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                        type='text'
                    />
                </label>
                <p id='instructions-error'>{errors.instructions}</p>
                </div>

                <div id='inputBoxes'className='input-box'>
                <div id='termsBox'className='input-box'>
                    
                <label> Make this gluten-free? &nbsp;
                    <input
                        type="checkbox"
                        name='gluten'
                        checked={values.gluten === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <p id='gluten-error'>{errors.gluten}</p>
                </div>

                <div>
                    <button id='orderBtn' disabled={disabled}>Order Now</button>
                </div>
            </div>
        </div>
    );
};
export default Form