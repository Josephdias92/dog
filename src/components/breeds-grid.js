import React from 'react';

const BreedGrid = (props) => (
    <div className="d-flex border overflow-auto" style={{height: '400px'}}>
        {props.dogs.map(
            (item, index) => <div key={index} className="m-2" onClick={_ => props.selectPet(item)}><img  src={item} className="img-thumbnail" 
                /></div>
        )}
    </div>
);

export default BreedGrid;