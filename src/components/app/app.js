import React, {useEffect, useState} from 'react';
import './app.css';
import Header from "../header/heder";
import ListComponents from "../list-components/list-components";
import {getAllPokemon, getPokemon} from '../../services/poke-service'
import PokeDetails from "../poke-details/poke-details";

function App() {

    const [pokeData, setPokeData] = useState([]);
    const [loadUrl, setLoadUrl] = useState('');
    const [spinner, setSpinner] = useState(true);
    const url = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
        async function fetchData() {
            let resp = await getAllPokemon(url);
            setLoadUrl(resp.next);
            await loadUrl(resp.results);
            setSpinner(false);
        }

        fetchData();
    }, [])

    const load = async () => {
        setSpinner(true);
        let data = await getAllPokemon(loadUrl);

    }

    const loadPoke = async (data) => {
        let pokeData = await Promise.all(data.map(async pokemon => {
            let pokemonRec = await getPokemon(pokemon)
            return pokemonRec
        }))
        setPokeData(pokeData);
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 ">
                        <p className="p-style">
                            <ListComponents/>
                        </p>
                    </div>
                    <div className="container">
                        { pokeData.map((pokemon, i) => {
                            return <PokeDetails key={i} pokemon={pokemon}/>
                        })}
                    </div>
                </div>
                <div className="col-1 load-more">
                    <button onClick={load}> Load More</button>
                </div>
            </div>
        </div>
            )
        }
export default App;







