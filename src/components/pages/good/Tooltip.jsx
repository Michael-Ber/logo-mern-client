import React from 'react'

export const Tooltip = ({message, show}) => {

    const styles = show ? {display: 'block'}: {display: 'none'}
  return (
    <div style={styles} className='tooltip'>
        <p>{message}</p>
    </div>
  )
}
