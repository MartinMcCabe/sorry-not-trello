import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {
//   //
// } from '../actions/actionCreators'

// import BoardItem from '../components/boardItem'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { boards } = this.props
    console.log(boards)
    return (
      <div className='board'>
          <h3 className='board--name'>board name here</h3>
          {/* <div className='boards--items'>
            {Object.keys(boards).map(this.renderBoard.bind(this))}
          </div> */}
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

export default connect(mapStateToProps)(Board)
