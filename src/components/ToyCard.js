import React from "react"

function ToyCard({ id, name, image, likes, onDelete, toys, setToys }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(id))
  }

  function updateLikes(data) {
    let updatedToys = toys.map((toy) =>
      toy.id === data.id ? { ...toy, likes: data.likes } : toy
    )
    setToys(updatedToys)
  }

  function addLikes(event) {
    event.preventDefault()
    const updatedLikes = likes + 1

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then((response) => response.json())
      .then((data) => updateLikes(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={addLikes}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
