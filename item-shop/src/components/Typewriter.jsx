import { useState, useEffect } from 'react'

// This function creates the typewriter effect that is seen on the page description.  It takes two arguments.
//  pageDescription is an array of letters that make up the description of the current page a user is on.
//  placeHolder is a string of the pageDescription array that is used for display purposes.
export default function Typewriter({ pageDescription, placeHolder }) {
  const [description, setDescription] = useState([])

  // Call the function once, only on page load.
  useEffect(() => {
    typewriter()
  }, [])

  // Takes the  array of letters pageDescription, takes the first letter of the array, and adds it to an array called description.  It then adds a timeout of 40ms before recalling itself until all letters from pageDescription are in the new description array.
  const typewriter = () => {
    if (pageDescription.length > 0) {
      let nextLetter = pageDescription.shift()
      setDescription((state) => [...state, nextLetter])

      setTimeout(typewriter, 40)
    }
  }

  // returns two paragraphs of text.  The first one is the place holder.  This defines the size of the div on screen.
  // The second paragraph is what is actually displayed.  It appears letter by letter until the entire page description has been displayed.
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
