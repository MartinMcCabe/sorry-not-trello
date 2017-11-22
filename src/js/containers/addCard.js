import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  activateAddCard,
  setCardNameValue,
  createCard
} from '../actions/actionCreators'

import AddButton from '../components/addButton'

class AddCard extends Component {
  constructor(props) {
    super(props)
  }

  setActive(){
    const { dispatch, id } = this.props
    dispatch(activateAddCard(id))
  }

  handleChange (event) {
    const { dispatch } = this.props
    dispatch(setCardNameValue(event.target.value))
  }

  createCard() {
    const { new_card_name } = this.props.app
    const { id, dispatch } = this.props
    dispatch(createCard(new_card_name, id))
  }

  render() {
    const { board, app, id } = this.props

    if(app.add_card_active && app.current_list_id == id){
      return (
        <div className='add-card'>
          <div className='add-card--form'>
            <input type='text' placeholder='card name' onChange={this.handleChange.bind(this)} className='dark' />
            {app.new_card_name != '' ? <AddButton label='Add' onclick={this.createCard.bind(this)} classes='dark'/> : null}
          </div>
        </div>
      )
    }else{
      return (
        <div className='add-card'>
          <AddButton label='Add a card' onclick={this.setActive.bind(this)} classes='dark' />
        </div>
      )
    }
  }
}

function mapStateToProps( state ){
  const { app } = state
  return {
    app
  }
}

export default connect(mapStateToProps)(AddCard)
