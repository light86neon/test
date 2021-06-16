import React,{Component} from "react";

function PokeDetails ({pokemon}){

        return(
            <div className="poke-details jumbotron">
                <img className="poke-image"
                    src="https://pokeres.bastionbot.org/images/pokemon/1.png"/>
                <div className="col-6">
                        {pokemon.name}
                </div>
            </div>
        )

}

export default PokeDetails;
