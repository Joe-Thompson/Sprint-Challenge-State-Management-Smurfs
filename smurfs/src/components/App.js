import React, { useEffect } from "react";
import { connect } from 'react-redux';
import logo from '../images/logo.png';
import "./App.css";
import { getSmurfs } from "../actions/GetActions";
import CardLIst from "./CardLIst";
import Form from './Form';

const App = (props) => {

    useEffect(() => {
        props.getSmurfs();
    },[]);

    return (
        <div className="App">
            <img className='logo' src={logo} alt='missing'/>
            <h1>With Redux</h1>
            <Form />
            <CardLIst />
        </div>
    );
};

const mapDispatchToProps = {
    getSmurfs
};

export default connect(
    null,
    mapDispatchToProps
)(App);
