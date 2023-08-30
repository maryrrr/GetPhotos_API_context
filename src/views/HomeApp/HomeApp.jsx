import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './HomeApp.styles.scss'

export default function HomeApp() {
  const [characters, setCharacters] = useState([])

useEffect(() => {
  getCharacters()

}, [])

const getCharacters = async () => {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos  ')
      setCharacters(response.data)
      console.log(response.data);
      } catch (error) {
        console.error(error)
  }
}
return (

  <>
    <h2>The format of the photos</h2>
    <div className="card__post">
        {characters.map((character, index) => (
            <div key={index} className="card__items">
                <h4>{character.title}</h4>
                <img 
                    src={character.url} 
                    alt={character.title}
                    className="card__image"
                    onError={(e) => {
                        e.target.src = "placeholder-image-url.jpg"
                    }} />
            </div>
          
))}
</div>
</>
  )
}







