import React from 'react'
import PizzaStock from './PizzaStock.jpg'
import Styled from 'styled-components'

const StyledHome = Styled.div`
    text-align:center;
    margin: 10% 10%;
    padding: 0% 5%;


    #image{
        width:100%;
    }
`

const Home = () => {

    return (
    <StyledHome>
    <div className='home-container'>
        <div className='body'>
            <p>All of Lambda’s pizzas are prepared on a New York style crust with a slightly thicker edge & cooked golden brown. Completely customize your pizza using our Pizza Builder Tool. Start building your own pizza today!</p>
   
            <img id='image' className='home-image' src={PizzaStock} alt='stock za img'/>
      </div>
    </div>
    </StyledHome>
    );
};
export default Home