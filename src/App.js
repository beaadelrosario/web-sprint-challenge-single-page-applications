import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom';
import * as yup from 'yup'
import Home from './components/Home'
import Form from './components/Form'
import OrderComplete from './components/OrderComplete'
import formSchema from './validation/FormSchema'
import Styled from 'styled-components'

const StyledHome = Styled.div`
    text-align:center;
    margin: 5% 15%;
    padding: 5% 10%;
    background-color:black;
    color: white;
    padding: 5% 1%;
    border: 12px solid red;

    h1 {
        font-size: 4em;
        color: red;
        font-family:times;
    }

`
const initialFormValues = {
  name: '',// input text field
  size:'',
  sauces: '', // dropdown
  toppings: {
    Pepperoni: false,
    Clams: false,
    Pineapple: false,
    Veggies: false
  }, // checkboxes
  instructions: '', // input text field
}

const initialFormErrors = {
  name:'',// input text field
  size:'',
  sauces: '', // dropdown
  toppings: '', 
  instructions: '', // input text field
}

const initialForm = []
const initialDisabled = true

const App = () => {

  const [users, setUsers] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postUser = (users) => {
    const newPizza = {
      name: formValues.name,
      size:formValues.size,
      sauces: formValues.sauces,
      toppings: formValues.toppings,
      instructions: formValues.instructions,
    }

    axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      console.log(res.data);
      setUsers([res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
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
      [name]: value
    })
  }


  const checkboxChange = (name, isChecked) => {

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, // not an array
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(), // input text field
      size:formValues.size.trim(),
      sauces: formValues.sauces.trim(),// dropdown
      toppings: Object.keys(formValues.toppings).filter(tp =>
        formValues.toppings[tp]), // checkboxes
      instructions: formValues.sauces.trim(), // input text field
    }
    postUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <StyledHome className='App'>
      <nav>
        <div>
          <h1 className='store-header'>Lambda Eats</h1>
        </div>
        <div className='nav-links'>
          <Link to='/pizza'>Build Your Own Pizza!</Link>
        </div>
      </nav>

    <Route exact path='/'>
        <Home />
      </Route>

    <Route path='/pizza'>
      <Form 
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
        post={postUser}
        users={users}
        />
      </Route>

      <Route path="/order">
        <OrderComplete users={users}/>
      </Route>

  </StyledHome>
  );
};
export default App;
