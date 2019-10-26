import React, { useEffect } from "react";
import { connect } from 'react-redux';
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
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
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
