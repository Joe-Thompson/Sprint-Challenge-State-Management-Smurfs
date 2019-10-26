import React from 'react';
import { connect } from "react-redux";
import Card from "./Card";

const CardList = (props) => {
    console.log(props);
    return (
        <div>
            <p> hey you guys </p>
            {props.village.smurf.map((item, index) => {
               return <Card key={index} smurf={item} index={index}/>
            })}
        </div>
    )

};

function mapStateToProps(state) {
    return {
        village: state
    };
}

export default connect(mapStateToProps)(CardList);