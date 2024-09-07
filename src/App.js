import './App.css';
import React, { Component } from 'react';

class  App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user:[],
       message:''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')//url to our API
    .then(response => response.json())
    .then(res => {
      if (res.data){
        
        this.setState({user:res.data, message: res.message})
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

renderUser(){
  if (this.state.user.length <= 0) {
    return <div>Loading...</div>
  }
  else{
    return this.state.user.map((user, index) => {
      return <div key={user.id}><p> {user.name} is {user.age} years old </p></div>
    })
  }
}

render() { return (
  <div className="App">
    <p id="message">{this.state.message}</p>
    {this.renderUser()}
  </div>
);
}
}

export default App;
