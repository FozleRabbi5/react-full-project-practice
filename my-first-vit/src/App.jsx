import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Counter from './Counter'

function App() {
  const actors = ['Mannan', 'Riyaj', 'Sha Rukh khan'];

  function evenHandler(){
    alert('Dhur chay');
  }

  return (
    <>
    <Counter></Counter>
    <button onClick={evenHandler}>Btn one</button>
    <button onClick={evenHandler}>Btn two</button>
      <p>Hello Fozle</p>
      <Person></Person>
      <ToDo taskName = "Learn React" isDone = {false}></ToDo>
      {
        actors.map(
          actor => <Actor name = {actor} ></Actor>
        )
      }


    </>
  )
}

function Person(){
  const s = "abar jigay"
  return <h3>Stupid {s}</h3>
}


export default App
