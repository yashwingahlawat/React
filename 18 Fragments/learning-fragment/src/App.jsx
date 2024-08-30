import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import ErrorMsg from './components/ErrorMsg';
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import './App.css'
import FoodInput from './components/FoodInput';
function App() {
  // let foodItems = []
  // let foodItems = ['a', 'sfd', 'wss']
  // let textState = useState("Enter food here")
  // let showText = textState[0]
  let [foodItems, setFoodItems] = useState(['a', 'sfd', 'wss'])
  let [showText, setTextState] = useState("Enter food here")
  // let setTextState = textState[1]
  // console.log(showText);
  const ChangeHandler = (e) => {
    if (e.key == 'Enter') {
      let item = e.target.value
      let newItem = [...foodItems, item]
      setFoodItems(newItem)
      console.log(`Entered val is ${item}`);
    }
    // console.log(e.target.value);
    // setTextState(e.target.value)

  }
  // let emptymsg = foodItems.length === 0 ? <h3>I am hungry</h3> : null
  return (
    <>
      <Container>
        <h1 className='food-heading'>Healthy Food</h1>
        <FoodInput ChangeHandler={ChangeHandler}></FoodInput>
        <p>{showText}</p>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>hlo how re you</p>
      </Container>
    </>
    // <>
    //   <h1 className='food-heading'>Healthy Food</h1>
    //   {/* {emptymsg} */}
    //   <ErrorMsg items={foodItems}></ErrorMsg>
    //   <FoodItems items={foodItems}></FoodItems>
    // </>
  );
}
export default App