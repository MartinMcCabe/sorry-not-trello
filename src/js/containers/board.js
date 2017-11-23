import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {
  saveCard,
  deleteCard
} from '../actions/actionCreators'

import List from './list'
import AddList from './addList'
import CustomDragLayer from './customDragLayer'
import Card from '../components/card'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  saveCard(card, name, description){
    this.props.dispatch(saveCard(card, name, description))
  }

  deleteCard (card) {
    if(confirm('Delete this card?')){
      this.props.dispatch(deleteCard(card))
    }
  }

  renderLists(key) {
    const { lists } = this.props
    const { id } = this.props.match.params
    if(lists[key].board == id){
      return (
        <List key={key} id={key} list={lists[key]}/>
      )
    }else{
      return null
    }
  }

  render() {
    const { boards, lists, cards, app } = this.props
    const { id } = this.props.match.params

    return (
      <div className='board'>
        <div className='board--container'>
          <div className='board--content'>
            <CustomDragLayer cards={cards}/>
            <div className='board--name'>{boards[id].name}</div>
            <div className='board--lists-wrapper'>
              <div className='board--lists-container'>
                  {Object.keys(lists).map(this.renderLists.bind(this))}
                  <AddList board={boards[id]} id={id} />
              </div>
            </div>
            {app.edit_card ? <Card onSave={this.saveCard.bind(this)} id={app.edit_card} cards={cards} onDelete={this.deleteCard.bind(this)} /> : null}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  const { boards, lists, cards, app } = state
  return {
    boards,
    lists,
    cards,
    app
  }
}

Board = DragDropContext(HTML5Backend)(Board)
export default connect(mapStateToProps)(Board)
