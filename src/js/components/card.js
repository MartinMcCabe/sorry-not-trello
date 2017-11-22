import React from 'react'

const Card = ({id, card, onSave}) => {
  return (
    <div className='card'>
      <div className='card--content'>
        <form className='card--form'>
          <input type='text' value={card.name} placeholder='Card name' name='card_name' id='card_name' />
          <textarea placeholder='Card description' id='card_description' name='card_description'></textarea>
          <submit>Save</submit>
        </form>
      </div>
    </div>
  )
}

export default Card
