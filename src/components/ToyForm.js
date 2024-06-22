import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function ToyForm({ addNewToys }) {
  const [newToy, setNewToy] = useState({
    id: uuid(),
    name: "",
    image: "",
    likes: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewToy({
      ...newToy,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewToys(newToy)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
