import React from 'react'


export default function ItemList({tittle, description}) {
  return (
    <div>
      <strong style={{fontSize: "24px", color: "#538BF5", margin: "1rem"}}>{tittle}</strong>
      <p style={{fontSize: "24px", color: "#999999", margin: "1rem"}}>{description}</p>
      <hr style={{marginBottom: "20px", opacity: "0.2", margin: "1rem"}} />
    </div>
  )
}
