import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class  App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')//url to our API
    .then(response => response.json())
    .then(res => {
      if (res.data){
        console.log(res.data)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  render(){
    return (
    <div className="App">
      
    </div>
  );
}
}

export default App;
