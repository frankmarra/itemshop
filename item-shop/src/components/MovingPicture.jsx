import { useState, useEffect } from 'react'

export default function MovingPicture({ pageDescription }) {
  const [picture, setPicture] = useState('/assets/mouth_closed.png')

  //Array of pictures that will be used for the animation.
  let pixelArray = ['/assets/mouth_closed.png', '/assets/Mouth_open.png']
  useEffect(() => {
    movingPic()
  }, [])

  //Sets variable mouthMove that is a random number between 0 and 3.  Then, will remove the first letter from the pageDescription array, and if mouthMove is 2 or less, it will play the mouth moving animation.  It then sets a timeout for 40ms and calls the function again.  This happens until the pageDescription length is 0.  Then the profile pic stays on the specified image.
  const movingPic = () => {
    let mouthMove = Math.floor(Math.random() * 4)
    if (pageDescription.length > 0) {
      let nextLetter = pageDescription.shift()
      if (mouthMove <= 2) {
        setPicture(pixelArray[Math.floor(Math.random() * pixelArray.length)])
      }
      setTimeout(movingPic, 40)
    } else {
      setPicture('/assets/mouth_smile.png')
    }
  }

  return picture && <img src={picture} alt="Frank Marra" />
}
