import React, { useEffect, useState } from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  function handleNewToys(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      body: JSON.stringify(newToy),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setToys([...toys, data])
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToys={handleNewToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  )
}

export default App
