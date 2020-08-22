import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ 'Razzak', 'Rubel','alomgir', 'Munna'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$89.44'},
    {name: 'After Effect', price: '$89.44'},
    {name: 'After indisign', price: '$89.44'}

  ]
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li> {nayok} </li>)
          }
          {
            products.map(product => <li> {product.name} </li>)
          }
        </ul>
        {
          products.map(product => <Product products = {product} > </Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(0)
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick= {()=> setCount(count-1)} > Decrease</button>
      <button onClick= {()=> setCount(count+1)} > Increase</button> 
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li> {user.name} { user.phone} </li>)
        }
      </ul>
    </div>
  )

  
}


function Product(props){
  const productStyle={
    border: '1 px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px'

  }
  const {name, price} = props.products
  return(
    <div style={productStyle}>
      <h3> {name} </h3>
      <h5> {price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
