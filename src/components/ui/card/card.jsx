import React from 'react'

export default function Card({class_card, children}) {
  return (
    <>
      <article className={`card ${class_card}`}>
        {children}
      </article>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

