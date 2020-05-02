import React from 'react';

const Pet = (props) => (
    <div className="d-flex justify-content-center align-items-center flex-grow-1" >
        <img src={props.pet} className="img-thumbnail" style={{maxHeight: 400}}/>
    </div>
);

export default Pet;