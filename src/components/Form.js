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
            <h2>Build Your Own Pizza</h2>

            <div>
                <h3>Please complete this form to continue. All pizzas come with fresh mozzerella cheese.</h3>
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
                        <option value='marinara'>Marinara</option>
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
                        <option value='vegetables'>Vegetables</option>
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

                <div id='glutenBox'className='input-box'>
                <label> Make this gluten-free? &nbsp;
                    <input
                        type="checkbox"
                        name='gluten'
                        checked={values.gluten === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                </div>

                <div>
                    <br></br>
                    <button id="submitBtn" disabled={disabled}>Place Order</button>
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