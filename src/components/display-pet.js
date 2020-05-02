import React from 'react';

const Pet = (props) => (
    <div style={{height: '400px'}} className="d-flex justify-content-center align-items-center">
        <img src={props.pet} className="img-fluid"/>
    </div>
);

export default Pet;