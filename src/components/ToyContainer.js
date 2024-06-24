import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, setToys, deleteToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          id={toy.id}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          onDelete={deleteToy}
          toys={toys}
          setToys={setToys}
        />
      ))}
    </div>
  )
}

export default ToyContainer
