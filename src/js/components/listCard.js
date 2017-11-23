import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from '../constants'
import { getEmptyImage } from 'react-dnd-html5-backend';

const cardSource = {
  beginDrag(props) {
    return { id: props.id }
  },

  endDrag(props, monitor, component) {

  }

}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  }
}

class ListCard extends Component {

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: false
    })
  }

  render() {
    const { connectDragSource, isDragging, card, id, onclick, onDelete } = this.props
    var dragClass = isDragging ? 'is-dragging' : ''
    const classes = `list-card ${dragClass}`

    return connectDragSource(
      <div className={classes} onClick={()=>onclick(id)}>
        {card.name}
        <button onClick={(e)=> { e.preventDefault(); e.stopPropagation(); onDelete(id)}} className='btn-delete dark' ></button>
      </div>
    )
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(ListCard)
