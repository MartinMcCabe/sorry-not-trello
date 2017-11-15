import React, { Component, cloneElement } from 'react'
// import { NavLink } from 'react-router-dom'

class PageTemplate extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='main'>
        <header>
          <div className='site-name'>sorry, not trello</div>
        </header>

        { cloneElement( this.props.children, this.props ) }

      </div>
    )
  }
}

export default PageTemplate
