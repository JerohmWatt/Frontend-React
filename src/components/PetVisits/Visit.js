import React from 'react'

const Visit = ({date,description}) => {
  return (
      <tr>
        <td>{date}</td>
        <td>{description}</td>
      </tr>
  )
}

export default Visit