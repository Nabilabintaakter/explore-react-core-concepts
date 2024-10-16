import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore';

function App() {
  const actors = ['Mina', "Raju", 'Mithu', "Moyna", 'Bokul'];
  const singers = [
    {name: 'Dr. Mahfuzur', age: 68, id:1},
    {name: 'Eva Rahman', age: 38, id:2},
    {name: 'Runa Layla', age: 65, id:3},
    {name: 'Sabina Yeasmin', age: 58, id:4}
  ];
  const Books =[
    {id: 1, name: 'Physics', price: 350},
    {id: 2, name: 'Chemistry', price: 450},
    {id: 3, name: 'Biology', price: 400},
    {id: 4, name: 'Math', price: 300}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books= {Books}></BookStore>
      {/* {
        singers.map(oneSinger => <Singer singer={oneSinger}></Singer>)
      } */}
      {/* <Actor name="Kakatua"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {/* <Todo
        task='Learn React'
        isDone={true}></Todo>
      <Todo
        task='Core concepts'
        isDone={false}></Todo>
      <Todo
        task='JSX concepts'
        isDone={true}></Todo> */}
      <Device name="Laptop" price='55,000 tk'></Device>
      <Device name="Mobile" price='17,000 tk' ></Device>
      {/* <Device name="Watch" price='3,000 tk'></Device>
      <Device name="Mouse" price='2,500 tk'></Device> */}
      <Device></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='90'></Student>
      <Student ></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props) {
  // console.log(props);
  return (
    <div className='device'>
      <h2>This device: {props.name} price: {props.price}</h2>
    </div>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'mina', age: 12 }
  return (
    <h3>I am {person.name} with age: {person.age}</h3>
  )
}

function Student({ grade = '1', score = '0' }) { //default values added here
  // console.log(props);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score} </p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '4px solid blue',
    borderRadius: '10px',
    backgroundColor: 'skyblue'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App
