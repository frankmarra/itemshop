import { useState, useEffect } from 'react'

export default function Typewriter({ pageDescription, placeHolder }) {
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

  return (
    <div style={{ position: 'relative' }}>
      <p
        style={{
          visibility: 'hidden',
          padding: '0',
          margin: '0'
        }}
      >
        {placeHolder}
      </p>
      <p
        className="page-description-text"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          margin: '0'
        }}
      >
        {description}
      </p>
    </div>
  )
}
