import { useState, useEffect } from 'react'

export default function ProjectImage({ picArray, title }) {
  const [currentImage, setCurrentImage] = useState(picArray[0])

  let counter = picArray.length
  useEffect(() => {
    pickImage()
  }, [])

  const pickImage = () => {
    if (counter > 0) {
      setCurrentImage(picArray[counter - 1])
      counter--
      setTimeout(pickImage, 5000)
    } else if (counter == 0) {
      counter = picArray.length
      setCurrentImage(picArray[counter - 1])
      counter--
      setTimeout(pickImage, 5000)
    }
  }

  return (
    <img
      src={currentImage}
      alt={title}
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
  )
}
