import { useState, useEffect } from 'react'

export default function MovingPicture({ pageDescription }) {
  const [picture, setPicture] = useState('/assets/mouth_closed.png')

  let pixelArray = ['/assets/mouth_closed.png', '/assets/Mouth_open.png']
  useEffect(() => {
    movingPic()
  }, [])

  const movingPic = () => {
    if (pageDescription.length > 0) {
      let nextLetter = pageDescription.shift()

      setPicture(pixelArray[Math.floor(Math.random() * pixelArray.length)])
      setTimeout(movingPic, 40)
    } else {
      setPicture('/assets/mouth_smile.png')
    }
  }

  return picture && <img src={picture} alt="Frank Marra" />
}