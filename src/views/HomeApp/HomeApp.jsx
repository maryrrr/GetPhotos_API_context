import React, { useEffect,useContext } from 'react'
import { Home } from '../../components/Home/Home'
import { GlobalContext } from '../../context/GlobalState'
import './HomeApp.styles.scss'

export default function HomeApp() {
  const { characters, getCharacters } = useContext(GlobalContext)

useEffect(() => {
  getCharacters()

}, [])


return (

  <>
    <h2>The format of the photos</h2>
    <div className='card_post'>
    
        {characters && characters.map((character) => (
          <div className='card_items'>
            <Home 
            key={character.id} 
            name={character.title}
            src={character.url}
            />
            </div>
        ))}
    </div>
  </>
  )
}







