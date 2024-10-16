import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price='55,000 tk'></Device>
      <Device name="Mobile" price='17,000 tk' ></Device>
      <Device name="Watch" price='3,000 tk'></Device>
      <Device name="Mouse" price='2,500 tk'></Device>
      <Device></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='90'></Student>
      <Student ></Student>
      <Developer></Developer>
    </>
  )
}

function Device (props){
  // console.log(props);
  return (
    <div className='device'>
      <h2>This device: {props.name} price: {props.price}</h2>
    </div>
  )
}

function Person (){
  const age = 25;
  const money = 20;
  const person ={name: 'mina', age:12}
  return (
    <h3>I am {person.name} with age: {person.age}</h3>
  )
}

function Student({grade='1', score='0'}){
  // console.log(props);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score} </p>
    </div>
  )
}
function Developer(){
  const developerStyle ={
    margin: '20px',
    padding : '20px',
    border : '4px solid blue',
    borderRadius : '10px',
    backgroundColor : 'skyblue'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App
