import { API_RICKANDMORTY } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacters() {
        const response = await fetch(API_RICKANDMORTY.CHARACTERS());
        return response.json();
    }

    async getCharactersById(id) {
        const response = await fetch(API_RICKANDMORTY.CHARACTERS_BY_ID(id));
        return response.json();
    }
   
}
export default new RickAndMortyService();