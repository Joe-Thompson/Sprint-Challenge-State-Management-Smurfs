import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getSmurfs } from "../actions/Actions";
import CardLIst from "./CardLIst";

const App = (props) => {

    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
            <CardLIst />
        </div>
    );
};

function mapStateToProps(state) {
    return {
        name: state
    };
}
const mapDispatchToProps = {
    getSmurfs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
