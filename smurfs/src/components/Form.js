import React, { useState } from 'react';
import {connect} from "react-redux";
import {postSmurfs} from "../actions/PostActions";

const Form = (props) => {

    const [smurf, setSmurf] = useState({
        name: '',
        height: 0,
        age: 0
    });

    const handleChanges = e =>{
        setSmurf({...smurf, [e.target.name]: e.target.value})
    };

    const submitForm = event => {
        event.preventDefault();
        props.postSmurfs(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        });
    };

    return (
        <div>
            <form className='form' onSubmit={submitForm}>
                <label htmlFor="name">Name your new Smurf</label>
                <input className='input' type="text" onChange={handleChanges} name="name" placeholder='Please enter a name...'/>

                <label htmlFor="height">Is your Smurf tall or short?</label>
                <input className='input' type="text" onChange={handleChanges} id="height" name="height" placeholder='Please enter a number for your height...'/>

                <label htmlFor="age">Is your Smurf old or young?</label>
                <input className='input' type="text" onChange={handleChanges} id="age" name="age" placeholder='Please enter a number for your age...'/>
                <button onClick={submitForm} >Create New Smurf</button>
            </form>
        </div>
    )
};

const mapDispatchToProps = {
    postSmurfs
};

export default connect(
    null,
    mapDispatchToProps
)(Form);