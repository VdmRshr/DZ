import axios from "axios";

export default class RickAndMortyApi {
    api = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
    });

     getCharacters= async ()=> {
       const res= await this.api.get('/character/?page=1')
            .then(response => {
                return response.data.results;
            });
         return res

    }

}

