import React from 'react';

const BreedGrid = (props) => (
    <div className="p-2 border">
        <div className="d-flex overflow-auto" style={{height: '200px'}}>
            {props.dogs.map(
                (item, index) => <div key={index} className="m-2" onClick={_ => props.selectPet(item)}>
                    <img  src={item} className="img-thumbnail" style={{maxHeight: '180px'}}/>
                    </div>
            )}
        </div>
    </div>
);

export default BreedGrid;