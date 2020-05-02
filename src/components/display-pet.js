import React from 'react';

const Pet = (props) => (
    <div style={{height: '300px'}} className="d-flex justify-content-center align-items-center">
        <img src={props.pet} className="img-thumbnail" style={{maxHeight: 300}}/>
    </div>
);

export default Pet;