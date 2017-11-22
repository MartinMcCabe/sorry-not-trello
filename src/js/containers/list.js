import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  activateAddCard
} from '../actions/actionCreators'

import ListCard from '../components/listCard'
import AddCard from './addCard'

class List extends Component {
  constructor(props) {
    super(props)
  }

  renderCards(key) {
    const { cards, id } = this.props
    if(cards[key].list == id){
      return (
        <ListCard key={key} id={key} card={cards[key]} />
      )
    }else{
      return null
    }
  }

  ondragenter(event) {
    event.preventDefault()
  }

  dropped(event) {
    event.preventDefault()

    console.log('>>> ', event.dataTransfer.getData("text"))

  }

  addCard(){
    const { id, dispatch } = this.props
    dispatch(activateAddCard(id))
  }

  render() {
    const { cards, list, id } = this.props

    return (
      <div className='list' droppable='true' onDragOver={this.ondragenter.bind(this)} onDrop={this.dropped.bind(this)}>
          <div className='list--content'>
            <div className='list--name'>{list.name}</div>
            <div className='list--cards-holder'>
              {Object.keys(cards).map(this.renderCards.bind(this))}
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

export default connect(mapStateToProps)(List)
