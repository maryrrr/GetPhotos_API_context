import React from "react"


export const Home = (props) => {
    return (
        <>
        
            <p>{props.name}</p>
            <img 
                src={props.src} 
                alt={props.name}
            />
          </>  
        )
    }