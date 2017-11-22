import React from 'react'

const AddButton = ({label, onclick, classes=''}) => {
  const css = `btn-add ${classes}`
  return (
    <button className={css} onClick={onclick}>{label}</button>
  )
}

export default AddButton
