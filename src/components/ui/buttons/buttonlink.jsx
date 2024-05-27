import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttonlink({link, link_icon}) {
  return (
    <>
      <Link className='btn_link' to={link}>{link_icon}</Link>
    </>
  )
}
