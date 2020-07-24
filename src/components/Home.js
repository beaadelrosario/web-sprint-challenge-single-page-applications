import React, {useState,useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import PizzaStock from './PizzaStock.jpg'
import { Switch, Route } from 'react-router-dom'
import Form from './Form'
import Pizza from './Pizza'
import formSchema from '../validation/FormSchema'

const initialFormValues = {
    name: '',// input text field
    sauces: '', // dropdown
    toppings: '', // dropdown
    instructions: '', // input text field
    gluten: false, // checkbox
  }
  
const initialFormErrors = {
    name:'',// input text field
    sauces: '', // dropdown
    toppings: '', // dropdown
    instructions: '', // input text field
    gluten: 'false', // checkbox
  }
  
  const initialForm = []
  const initialDisabled = true

const Home = () => {

    const [users, setUsers] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 


  const postUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
    .then(res => {
      console.log(res.data);
      setUsers([res.data,...users])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
        [name]: isChecked
      })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(), // input text field
      sauces: formValues.sauces.trim(),// dropdown
      toppings: formValues.sauces.trim(), // dropdown
      instructions: formValues.sauces.trim(), // input text field
      gluten: formValues.gluten
    }
    postUser(newUser)
  }
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])

    return (
    <div>

        <div className='body'>
            <p>All of Lambda’s pizzas are prepared on a New York style crust with a slightly thicker edge & cooked golden brown. Completely customize your pizza using our Pizza Builder Tool. Start building your own pizza today!</p>
            <button to='/form'>Build Your Own</button>
            {/* <button onClick={routeToForm} className='build your own za'>Start Building
      </button> */}
            <img className='home-image' src={PizzaStock} alt='stock za img'/>
            <div>
            <h1>User Registration</h1>
      <Form 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      post={postUser}
      />

      {
        users.map(user => {
          return (
            <Pizza key={user.id} details={user} />
          )
        })
      }
        </div>
      </div>

      
        <Switch>
    <Route path='/pizza'>
        <Pizza />
      </Route>

    <Route path='/form'>
        <Form />
      </Route>

      {/* <Route path='/'>
        <Home />
      </Route> */}
    </Switch>
    </div>
    );
};
export default Home