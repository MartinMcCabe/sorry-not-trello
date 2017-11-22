import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {
//   //
// } from '../actions/actionCreators'

import List from './list'
import AddList from './addList'

class Board extends Component {
  constructor(props) {
    super(props)
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
    const { boards, lists } = this.props
    const { id } = this.props.match.params

    return (
      <div className='board'>
        <div className='board--container'>
          <div className='board--content'>
            <div className='board--name'>{boards[id].name}</div>
            <div className='board--lists-wrapper'>
              <div className='board--lists-container'>
                  {Object.keys(lists).map(this.renderLists.bind(this))}
                  <AddList board={boards[id]} id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  const { boards, lists } = state
  return {
    boards,
    lists
  }
}

export default connect(mapStateToProps)(Board)
