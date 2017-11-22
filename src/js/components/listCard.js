import React from 'react'

const ListCard = ({id, card}) => {
  return (
    <div className='list-card' draggable='true' onDragStart={(event)=>{ event.dataTransfer.setData('text', id) }}>{card.name}</div>
  )
}

export default ListCard
