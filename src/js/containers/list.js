import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'

import {
  activateAddCard,
  moveCard
} from '../actions/actionCreators'

import ListCard from '../components/listCard'
import ListCardPlaceholder from '../components/listCardPlaceholder'
import AddCard from './addCard'

const spec = {
  drop(props, monitor, component) {
    const card = monitor.getItem().id
    const list = props.id
    let pos = Object.keys(props.cards).filter(key => props.cards[key].list == list).length == 0 ? component.state.placeholderPos : component.state.placeholderPos+1

    props.dispatch(moveCard(card, list, pos))
  },

  hover(props, monitor, component){

    // calculate where to put the placeholder
    const componentDomNode = findDOMNode(component)
    const listTop = componentDomNode.getBoundingClientRect().top
    const scrollTop = componentDomNode.scrollTop
    const _y = monitor.getClientOffset().y - listTop + scrollTop

    const cardHeight = 100; // should probably be in a constants file somewhere, get these values in components/_listCard.scss
    const cardMargin = 5; // should probably be in a constants file somewhere, get these values in components/_listCard.scss
    let placeholderPos;
    if(_y < cardHeight * 0.5){
      placeholderPos = -1
    }else{
      placeholderPos = Math.floor( (_y - cardHeight * 0.5) / (cardHeight + cardMargin) )
    }

    // I battled with this for some time, then found this issue that's still open: https://github.com/react-dnd/react-dnd/issues/179
    component.setState({
      placeholderPos
    })

  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    res: monitor.getItem()
  }
}

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholderPos: null
    }
  }

  addCard(){
    const { id, dispatch } = this.props
    dispatch(activateAddCard(id))
  }

  render() {
    const { cards, list, id, connectDropTarget, isOver, canDrop } = this.props
    const { placeholderPos } = this.state

    const isOverClass = isOver ? 'is-over' : ''
    const classes = `list ${isOverClass}`

    let cardsArr = []
    let putPlaceholderBottom = false

    Object.keys(cards)
      .filter( key => cards[key].list == id )
      .sort((a, b) => cards[a].pos - cards[b].pos)
      .map( (key, i) => {
        if( isOver && canDrop && placeholderPos === -1 && i === 0) {
          cardsArr.push( <ListCardPlaceholder key='placeholdercard' /> )
        }

        cardsArr.push( <ListCard key={key} id={key} card={cards[key]} /> )

        if( placeholderPos === i && isOver && canDrop) {
          cardsArr.push( <ListCardPlaceholder key='placeholdercard' /> )
        }
      })

      if(isOver && cardsArr.length === 0){
        cardsArr.push( <ListCardPlaceholder key='placeholdercard' /> )
      }

    return connectDropTarget(
      <div className={classes}>
          <div className='list--content'>
            <div className='list--name'>{list.name}</div>
            <div className='list--cards-holder'>
              {cardsArr}
            </div>
            <AddCard list={list} id={id} />
          </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  const { cards } = state
  return {
    cards
  }
}

List = DropTarget(ItemTypes.CARD, spec, collect)(List)
export default connect(mapStateToProps)(List)
