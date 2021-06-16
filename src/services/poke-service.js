export default class PokemonService {

    _apiBase = 'https://pokeapi.co/api/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${url}` + `recieved ${res.status}`)
        }
        return await res.json();
    }

    // getAllPokemon(){
    //     return this.getResource(`/pokemon/`);
    // }

    //return array pokemons
    async getAllPokemon(){
        const res = await this.getResource(`/pokemon/`);
        return res.results;
    }

    getPokemon(id) {
        return this.getResource(`/pokemon/${id}/`);
    }
}

// const pokemon = new PokemonService();
//
// pokemon.getAllPokemon().then((pokemon)=> {
//     console.log(pokemon);
// })
//
// pokemon.getPokemon(3).then((p)=> {
//     console.log(p.name);
// })

//
// 1-st try connect to fetch api
//
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     });
//
//
// 2-nd I will try write code to async/await
//
//
// class PokemonService {
// _apiBase = 'https://pokeapi.co/api/v2/';
//
//     async getResource(url) {
//         const res = await fetch(`${this._apiBase} ${url}`);
//
//         if(!res.ok) {
//             throw new Error(`Coud not fetch ${url}` +
//                 `. recieves ${res.status}`)
//         }
//         return await res.json();
//     }
//
//     getAllPokemon() {
//         return this.getResource(`/pokemon/`)
//     }
//
//     getPokemon(id) {
//         return this.getResource(`/pokemon/${id}`);
//     }
// };
//
// const pokemon = new PokemonService();
//
// pokemon.getPokemon('ditto').then((body) => {
//     console.log(body);
// })
//
// getResource('https://pokeapi.co/api/v2/pokemon/133')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err) => {
//         console.error('Coud not fetch', err);
//     })
//
//https://pokeapi.co/api/v2/{endpoint}/
//
// fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     .then((res)=> {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     })


// const getResource = async (url) => {
//     const res = await fetch(url);
//
//     if (!res.ok) {
//         throw new Error (`Could not Fetch ${url}`+ `recieved ${res.status}`)
//     }
//     const body = await res.json();
//     return body;
// };
//
// getResource('https://pokeapi.co/api/v2/pokemon/1/')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err) => {
//         console.log('Could not fetch', err);
//     });
