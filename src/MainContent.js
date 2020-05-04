import React from 'react';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import Qualification from './Qualification.js';
import Work from './Work.js';
import './style.css';
import Contact from './Contact.js'

class MainContent extends React.Component {
    constructor (props) {
        super(props);
        this.handleOptionToggle= this.handleOptionToggle.bind(this);
    this.state = { 
        optionToggle : 'a'
     }
    }
    handleOptionToggle(e) {
        e.preventDefault();
        this.setState({
          optionToggle : e.target.value
            });
    }
    render()
    {
        return (
            <div className="bclass">
            <Header optionToggle={this.handleOptionToggle}/>   
            <div>
            { this.state.optionToggle === "a" ? <AboutMe /> : 
                this.state.optionToggle === "q" ? <Qualification /> : 
                    this.state.optionToggle === "w" ? <Work /> : <Contact /> }            
            </div>
            </div>
        )}
}

export default MainContent; 