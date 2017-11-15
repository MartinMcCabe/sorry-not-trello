import React from 'react'
import { Link } from 'react-router-dom'

const BoardItem = ({id, board, onClick}) => {
  const link = `/board/${id}`
  return (
    <Link to={link}>
      <div className='board-item'>
        <h2>{board.name}</h2>
      </div>
    </Link>
  )
}

export default BoardItem
