import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import BackButton from '../components/backButton'

class PageTemplate extends Component {
  constructor(props) {
    super(props)
  }

  onBack() {
    const { goBack } = this.props.history
    goBack()
  }

  render() {
    const { location } = this.props
    return(
      <div className='main'>
        { location.pathname != '/' ? <BackButton onclick={this.onBack.bind(this)}/> : null }
        <header>
          <div className='site-name'>sorry, not trello</div>
        </header>

        { cloneElement( this.props.children, this.props ) }

      </div>
    )
  }
}

function mapStateToProps( state ) {
  const { location } = state.router
  return {
    location
  }
}

export default connect(mapStateToProps)(PageTemplate)
