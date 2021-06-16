import React, { Component } from 'react';
import PokemonService from "../../services/poke-service";



export default class ListComponents extends Component {

    pokemonService = new PokemonService();

    render(){
        return(
           <p>list Component</p>
        )
    }
}
