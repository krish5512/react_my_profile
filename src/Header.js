import React from 'react';
import {Button} from 'reactstrap';

const Header = ({optionToggle}) => (

        <div>
        <Button className="bttnA btn-5" onClick = {optionToggle} value="a">ABOUT</Button>
        <Button className="bttnQ btn-5" onClick = {optionToggle} value="q">QUALIFICATION</Button>
        <Button className="bttnW btn-5" onClick = {optionToggle} value="w">WORK EXPERIENCE</Button>
        <Button className="bttnC btn-5" onClick = {optionToggle}>CONTACT</Button>
        </div>
);

export default Header;

