import React, { Component } from 'react';

const ListBreeds = (props) => (
    <div className="d-flex">
        <label className="mr-2">
            Select Breed
        </label>
        <select onChange={e => props.selectBreed(e.target.value)}>
            { props.breeds.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
    </div>
    
);

export default ListBreeds;