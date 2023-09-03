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

const deletePhotos = async(id) => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        console.log(res);
        dispatch({
            type: "DELETE_PHOTOS",
            payload: id,
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <GlobalContext.Provider
        value={{
            characters: state.characters,
            getCharacters,
            deletePhotos,
        }}
        >
        {children}
        </GlobalContext.Provider>
    )
    }