import React from 'react'
import LineWrapper from '../UI/LineWrapper'
import Gallery from './Gallery'
import VideoGallery from './VideoGallery'
import ToDiscuss from '../Contact/ToDiscuss'
import Footer from '../Contact/Footer'

const GalleryPage = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Gallery/>
      <VideoGallery/>
      <ToDiscuss/>
      <Footer/>
    </div>
  )
}

export default GalleryPage