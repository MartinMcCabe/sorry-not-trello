import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {
//   //
// } from '../actions/actionCreators'

import BoardItem from '../components/boardItem'

class Boards extends Component {
  constructor(props) {
    super(props)
  }

  renderBoard(key) {
    const { boards } = this.props
    return (
      <BoardItem key={key} board={boards[key]} id={key} />
    )
  }

  render() {

    const { boards } = this.props
    console.log(boards)
    return (
      <div className='boards'>
        <div className='content'>
          <h3 className='boards--collection-name'>My Boards</h3>
          <div className='boards--items'>
            {Object.keys(boards).map(this.renderBoard.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  const { boards } = state
  return {
    boards
  }
}

export default connect(mapStateToProps)(Boards)
