import React, { useEffect,useContext } from 'react'
import { Home } from '../../components/Home/Home'
import { GlobalContext } from '../../context/GlobalState'
import './HomeApp.styles.scss'

export default function HomeApp() {
  const { characters, getCharacters,deletePhotos } = useContext(GlobalContext)

useEffect(() => {
  getCharacters()

}, [])
const handleDeletePhoto = (id) => {
  deletePhotos(id);
  console.log(handleDeletePhoto);
};

return (

  <>
    <h2>The format of the photos</h2>
    <div className='card_post'>
    
        {characters && characters.map((character) => (
          <div className='card_items' key={character.id}>
            <Home 
            id={character.id} 
            name={character.title}
            src={character.url}
            deletePhoto={handleDeletePhoto}
            />
            </div>
        ))}
    </div>
  </>
  )
}







