import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

const initialFormValues = {
    sauces: '', // dropdown
    toppings: '', // dropdown
    instructions: '', // input text field
    quantity: '', // input text field
    gluten: false, // checkbox
  }
  
  const initialFormErrors = {
    sauces: '', // dropdown
    toppings: '', // dropdown
    instructions: '', // input text field
    quantity: '', // input text field
    gluten: 'false', // checkbox
  }
  
  const initialForm = []
  const initialDisabled = true

const Home = () => {

  const [form, setForm] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

    return (
    <div>
        <nav>
            <h1 className='store-header'>Lambda Eats</h1>

            <div className='nav-links'>
                <Link to='/form'>Build Your Own</Link>
            </div>
        </nav>

        <div className='body'>
            <p>All of Lambda’s pizzas are prepared on a New York style crust with a slightly thicker edge & cooked golden brown. Completely customize your pizza using our Pizza Builder Tool. Start building your own pizza today!</p>
            <button to='/form'>Build Your Own</button>
            {/* <button onClick={routeToForm} className='build your own za'>Start Building
      </button> */}
            <img className='home-image' src='/Assets/Pizza.jpg' alt='stock za img'/>
      </div>
    </div>
    );
};
export default Home