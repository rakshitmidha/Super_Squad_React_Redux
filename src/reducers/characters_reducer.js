import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index';
import { createCharacter } from './helpers';


function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER :
      let chatacters = state.filter(item => item.id !== action.id);
      return chatacters;
    case REMOVE_CHARACTER :
      chatacters = [...state, createCharacter(action.id)];
      return characters;
    default :
      return state;
  }
}

export default characters;
