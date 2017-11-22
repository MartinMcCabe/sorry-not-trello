import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  activateAddBoard,
  setBoardNameValue,
  createBoard
} from '../actions/actionCreators'

import AddButton from '../components/addButton'

class AddBoardItem extends Component {
  constructor(props) {
    super(props)
  }

  setActive(){
    this.props.dispatch(activateAddBoard())
  }

  checkValue(event) {
      this.props.dispatch(setBoardNameValue(event.target.value))
  }

  createBoard(){
    const { new_board_name } = this.props.app
    this.props.dispatch(createBoard(new_board_name))
  }

  render() {
    const { boards, app } = this.props

    if(!app.add_board_active){
      return (
        <div className='add-board'  onClick={this.setActive.bind(this)}>
            <h3 className='add-board--name'>+</h3>
        </div>
      )
    }else{
      return (
        <div className='add-board'>
            <input type='text' onChange={this.checkValue.bind(this)} placeholder='Board name' className='add-board--input' />
            {app.new_board_name != '' ? <AddButton label='Create' onclick={this.createBoard.bind(this)} /> : null}
        </div>
      )
    }
  }
}

function mapStateToProps( state ){
  const { boards, app } = state
  return {
    boards,
    app
  }
}

export default connect(mapStateToProps)(AddBoardItem)
