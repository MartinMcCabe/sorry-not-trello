import React, {Component} from 'react'

class Card extends Component {
  constructor (props) {
    super (props)
    const { cards, id } = this.props
    const card = cards[id]
    this.state = {
      name: card.name,
      description: card.description
    }
  }

  handleName (event) {
    this.setState({
      name: event.target.value
    })
  }

  handleDescription (event) {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    const { cards, id, onSave, onDelete } = this.props
    const card = cards[id]
    return (
      <div className='card-holder'>
        <div className='card'>
          <div className='card--content'>
            <form className='card--form'>
              <label for='card_name'>
                Name
                <input type='text' value={this.state.name} onChange={this.handleName.bind(this)} placeholder='Card name' name='card_name' id='card_name' className='dark' />
              </label>
              <label for='card_description'>
                Description
                <textarea placeholder='Card description' id='card_description' name='card_description' value={this.state.description} onChange={this.handleDescription.bind(this)} className='dark'></textarea>
              </label>
              <button onClick={(e)=> { e.preventDefault(); onSave(id, this.state.name, this.state.description)}} className='btn-save dark' >Save</button>
              <button onClick={(e)=> { e.preventDefault(); onDelete(id)}} className='btn-delete dark' ></button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


// const Card = ({id, card, onSave}) => {
//   return (
//     <div className='card-holder'>
//       <div className='card'>
//         <div className='card--content'>
//           <form className='card--form'>
//             <input type='text' value={card.name} placeholder='Card name' name='card_name' id='card_name' />
//             <textarea placeholder='Card description' id='card_description' name='card_description'>{card.description}</textarea>
//             <submit onClick={(e)=> { e.preventDefault(); onSave(id, )}}>Save</submit>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Card
