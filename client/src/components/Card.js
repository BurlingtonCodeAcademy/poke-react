import {useEffect, useState} from 'react'



function Card(props) {
  const [pokeData, setPokeData] = useState(null)

  useEffect(() => {
    if(!pokeData || props.name !== pokeData.species.name) {
      fetch(props.url)
      .then((res) => res.json())
      .then(pokeObj => {
        setPokeData(pokeObj)
      })
    }
  })


  return(
    <div className="card">
      {pokeData && (
      <div>
        <h3>{props.name}</h3>
        <img src={pokeData.sprites.front_shiny} alt="pokemon image"/>
        {pokeData.types.map(slot => {
          console.log(slot.type)
          return <p>{slot.type.name}</p>
        })}
      </div>
      )}
    </div>
  )
}

export default Card
