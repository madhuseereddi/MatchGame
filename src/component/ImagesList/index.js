import React from 'react'
import './index.css'

const ImagesList = ({ eachItem, imageClicked }) => {
  const { thumbnailUrl } = eachItem

  const clickImage = () => {
    imageClicked(eachItem.id)
  }

  return (
    <li>
      <button className="list-btn" onClick={clickImage}>
        <img src={thumbnailUrl} className="imageEach" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList