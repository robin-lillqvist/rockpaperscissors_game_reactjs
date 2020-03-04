import React from 'react'

const ShowCombo = props => {
  let displayCombo

  if (props.combo > 0) {
    displayCombo = (
      <>
        <div className='combo'>
           Combo! <div className='combo_value'> x{props.combo}</div>
        </div>
      </>
    )
  }

  return <>{displayCombo}</>
}

export default ShowCombo
