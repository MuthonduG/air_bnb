import React from 'react'

export default function Imageholder({image_url, iamge_alt}) {
  return (
    <>
      <img src={image_url} alt={iamge_alt} className='image' />
    </>
  )
}
