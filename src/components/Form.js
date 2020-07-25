import React from 'react'
import OrderComplete from './OrderComplete'

const Form = (props) => {

    const {
        values,
        post,
        inputChange,
        checkboxChange,
        errors,
        disabled,
        users
    } = props
    
    console.log('WHAT THE PROPS')
    console.log(props)

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    const onSubmit = evt => {
        evt.preventDefault()
        post()
      }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div id='formheader'>
            <h2>Start cookin...</h2>

            <div>
                <p>Please complete this form to continue. All pizzas come with fresh mozzerella cheese.</p>
            </div>

            <div className='register-form inputs'>
                <div id='inputBoxes'className='input-box'>
                <label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        id='customer'
                    />
                </label>
                <p id='usererror'>{errors.name}</p>
                </div>
                <div id='dropBoxes'className='inputDrop-box'></div>
                <label>Size:&nbsp;
                    <select id='size-dropdown'
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>-Pick a size-</option>
                        <option value='personal'>Personal</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='mondo'>Mondo</option>
                    </select>
                </label>
                <p id='size-error'>{errors.size}</p>
                
                <div id='dropBoxes'className='inputDrop-box'></div>
                <label>Choice of Sauce:&nbsp;
                    <select id='sauces-dropdown'
                        onChange={onInputChange}
                        value={values.sauces}
                        name='sauces'
                    >
                        <option value=''>- Select a sauce-</option>
                        <option value='marinara'>Marinara</option>
                        <option value='pesto'>Pesto</option>
                        <option value='clam'>Clam</option>
                        <option value='white garlic'>White Garlic</option>
                    </select>
                </label>
                <p id='sauces-error'>{errors.sauces}</p>
                </div>

                <div id='checkBoxes'className='inputCheck-box'></div>
                <label>Choose a Topping:&nbsp;
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Clams
                    <input
                        type="checkbox"
                        name='clams'
                        checked={values.toppings.clams === true}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Pineapple
                    <input
                        type="checkbox"
                        name='pineapple'
                        checked={values.toppings.pineapple === true}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Veggies
                    <input
                        type="checkbox"
                        name='veggies'
                        checked={values.toppings.veggies === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                </label>
                </div>
                <br></br>
                <div id='inputBoxes'className='input-box'>
                <label>Special Instructions:&nbsp;
                    <input
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                        type='text'
                        id='instruct'
                    />
                </label>
                <p id='instructerror'>{errors.instructions}</p>
                </div>

                <div>
                    <br></br>
                    <button id="orderBtn" disabled={disabled}>Place Order</button>
                </div>

                {
                    users.map(user => {
                        return <OrderComplete key={user.name} details={user} />
                    })
                } 
        </form>
    );
};
export default Form