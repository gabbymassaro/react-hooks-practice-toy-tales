import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, deleteToy }) {
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
        />
      ))}
    </div>
  )
}

export default ToyContainer
