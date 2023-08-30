import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
    const initialState = {
        characters: []
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    

const getCharacters = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        dispatch({
            type: "GET_CHARACTERS",
            payload: response.data,
        })
    }

    return (
        <GlobalContext.Provider
        value={{
            characters: state.characters,
            getCharacters,
        }}
        >
        {children}
        </GlobalContext.Provider>
    )
    }