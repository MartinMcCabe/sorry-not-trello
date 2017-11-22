import React from 'react'

const BackButton = ({onclick, classes=''}) => {
  const css = `btn-back ${classes}`
  return (
    <button className={css} onClick={onclick}></button>
  )
}

export default BackButton
