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
    margin: 5% 25%;
    padding: 5% 10%;
    background-color:#BFBFBB;
`
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
      sauces: formValues.sauces,
      toppings: formValues.toppings,
      instructions: formValues.instructions,
      gluten: formValues.gluten,
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
          <Link to='/form'>Build Your Own Pizza!</Link>
        </div>
      </nav>

    <Route exact path='/'>
        <Home />
      </Route>

    <Route path='/form'>
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
