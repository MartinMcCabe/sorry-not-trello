import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  activateAddList,
  setListNameValue,
  createList
} from '../actions/actionCreators'

import AddButton from '../components/addButton'

class AddBoardItem extends Component {
  constructor(props) {
    super(props)
  }

  setActive(){
    const { dispatch } = this.props
    dispatch(activateAddList())
  }

  handleChange (event) {
    const { dispatch } = this.props
    dispatch(setListNameValue(event.target.value))
  }

  createList() {
    const { new_list_name } = this.props.app
    const { id, dispatch } = this.props
    dispatch(createList(new_list_name, id))
  }

  render() {
    const { board, app } = this.props

    if(!app.add_list_active){
      return (
        <div className='add-list'>
          <div className='add-list--btn' onClick={this.setActive.bind(this)}>Add a list...</div>
        </div>
      )
    }else{
      return (
        <div className='add-list'>
          <div className='add-list--form'>
            <input type='text' placeholder='list name' className='add-list--form-input' onChange={this.handleChange.bind(this)} />
            {app.new_list_name != '' ? <AddButton label='Add' onclick={this.createList.bind(this)} /> : null}
          </div>
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
