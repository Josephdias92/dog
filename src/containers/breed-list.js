import React, { Component } from 'react';

import BreedGrid from '../components/breeds-grid';
import ListBreeds from '../components/dropdown-breeds';
import Pet from '../components/display-pet';
import Placeholder from '../DogPlaceholder.svg'

class BreedList extends Component {
    listOfBreeds = [
        "affenpinscher",
        "african",
        "airedale",
        "akita",
        "appenzeller",
    ];
    constructor() {
        super();
        this.state = {
            dogs: [],
            selectedPet: Placeholder,
        };
    }

    componentDidMount() {
        this.selectBreed(this.listOfBreeds[0]);
    }

    selectRandomPet = (breed) => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then((data) => data.json())
            .then(data => {
                this.setState({
                    selectedPet: data.message,
                })
            });
    }

    selectBreed = (breed) => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then((data) => data.json())
            .then(data => {
                this.setState({
                    dogs: data.message,
                })
            }).then(this.selectRandomPet(breed))
    }

    selectPet = (pet) => {
        this.setState({
            selectedPet: pet,
        })
    }

    render() {
        return (
            <div className="d-flex flex-column m-2 justify-content-around h-100">
                <ListBreeds
                    breeds={this.listOfBreeds} 
                    selectBreed = {this.selectBreed}/>
                <Pet pet={this.state.selectedPet}/>
                <BreedGrid dogs={this.state.dogs} selectPet={this.selectPet}/>
            </div>
        )
    }
}

export default BreedList;