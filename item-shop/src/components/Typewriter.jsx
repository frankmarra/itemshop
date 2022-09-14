import { useState, useEffect } from 'react'

export default function Typewriter({ pageDescription }) {
  const [description, setDescription] = useState([])

  useEffect(() => {
    typewriter()
  }, [])
  const typewriter = () => {
    if (pageDescription.length > 0) {
      let nextLetter = pageDescription.shift()
      setDescription((state) => [...state, nextLetter])

      setTimeout(typewriter, 40)
    }
  }

  return <p className="page-description-text">{description}</p>
}
