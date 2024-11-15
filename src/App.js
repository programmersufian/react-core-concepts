import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const pacers = ['Nahid Rana', 'Shoriful', 'Hasan', 'Ebadot']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$100.99'},
    {name: 'PDF Reader', price:'$10.99'},
    {name: 'Premiere Pro', price:'$200.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            pacers.map(pacer => <li>{pacer}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
       

        <Person boller="Rubel" role="your cut" platform="BCB"></Person>
        <Person boller="Taskin" role="swing" platform="BCB"></Person>
        <Person boller="Mostafiz" role="cutter" platform="BCB"></Person>
        <Person boller={pacers[2]} role="speed star" platform="BCB"></Person>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
    

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
 }
 function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
 }

function Person(props){
  const personStyle={
    border:'2px solid lightgreen',
    width: '400px',
    margin:'10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name:{props.boller}</h1>
    <h3>Hero of {props.role}</h3>
  </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'

  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
 