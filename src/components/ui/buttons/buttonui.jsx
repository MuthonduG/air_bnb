import React from 'react'

export default function Buttonui({class_btn, btn_name}) {
  return (
    <>
      <button type="submit" className={`btn ${class_btn}`}>{btn_name}</button>
    </>
  )
}
