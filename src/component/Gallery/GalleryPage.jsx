import React from 'react'
import LineWrapper from '../UI/LineWrapper'
import Gallery from './Gallery'
import VideoGallery from './VideoGallery'

const GalleryPage = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Gallery/>
      <VideoGallery/>
    </div>
  )
}

export default GalleryPage