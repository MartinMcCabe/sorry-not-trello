import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {
//   //
// } from '../actions/actionCreators'

// import BoardItem from '../components/boardItem'

class List extends Component {
  constructor(props) {
    super(props)
  }

  renderCards(key) {
    const { cards, id } = this.props
    if(cards[key].list == id){
      return (
        <div key={key} className='list-card-item'>card.</div>
      )
    }else{
      return null
    }
  }

  render() {
    const { cards } = this.props

    return (
      <div className='list'>
          <div className='list--content'>
            <div className='list--name'>List name</div>
            <div className='list--cards-holder'>
              {Object.keys(cards).map(this.renderCards.bind(this))}
            </div>
            <div className='list--btn-add'>+</div>
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
