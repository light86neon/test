import React, { Component } from 'react';
import PokemonService from "../../services/poke-service";

export default class ListComponents extends Component {

    pokemonService = new PokemonService();

    state = {
        pokemonList: null
    };

    componentDidMount() {
        this.pokemonService
            .getAllPokemon()
            .then((pokemonList)=> {
                this.setState({
                    pokemonList
                })
            });
    }



    render(){

        const { id, name, skills } = this.state;

        return(
            <div className="col-6">
                <img className="poke-image"
                     src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span>{skills}</span>
                    </li>
                </ul>
            </div>
            </div>

        )
    }
}
