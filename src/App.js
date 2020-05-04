import React from 'react';
import './style.css';
import {Button} from 'reactstrap';
import MainContent from './MainContent.js';

class App extends React.Component {
constructor(props){
  super(props);
  this.handleSHow = this.handleShow.bind(this);
  this.state = {
    modalState : true
  }
}
handleShow = () => {
  this.setState(()=>{
    return{
      modalState : false
    };
  });
}
render()
{
  console.log(this.state.modalState)
  return(
      <div>
      <h1 className="main-title">My Profile</h1>
      <MainContent />
      </div>
      )
}
}

export default App;
