const characters = (state, action) => {
    switch (action.type) {
    case "GET_CHARACTERS":
    return {
        ...state,
        characters: action.payload,
    }
        case "DELETE_PHOTOS" :
            return {
                ...state,
                characters: state.characters.filter((character) => character.id !== action.payload),

};
    default:
        return state;
    }
}

    
export default characters;