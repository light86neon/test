import React, {useEffect} from 'react';

import { getPokemon, getAllPokemon } from '../../services/poke-service'
import './app.css';
import ListComponents from "../list-components/list-components";
import PersonDetails from "../person-details/person-details";
import Header from "../header/heder";
import LoadMore from "../load-more/load-more";
import PokemonService from "../../services/poke-service";


function App(){

    const [pokemonData, setPokemonData] = useState([])
    const [loadMore, setLoadMore] = useState('');
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
    async function fetchData() {
        let response = await getAllPokemon(initialURL)
        setLoadMore(response.next);
        await loadPokemon(response.results);
        setLoading(false);
    }
    fetchData();
}, []);


const load = async () => {
        setLoading(true);
        let data = await getAllPokemon(loadMore);
        await loadPokemon(data.results);
        setLoadMore(data.next);
        setLoading(false);
    };

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }

        return (
            <div>
                <Header/>
                <div>
                    <div>
                        <ListComponents/>
                    </div>
                    <div>
                        <PersonDetails/>
                    </div>
                </div>
                <button onClick={load}>Load More</button>
            </div>

        );
}
export default App;

// <div>
//     <Header />
//     <RandomPlanet />
//
//     <div className="row mb2">
//         <div className="col-md-6">
//             <ItemList />
//         </div>
//         <div className="col-md-6">
//             <PersonDetails />
//         </div>
//     </div>
// </div>
