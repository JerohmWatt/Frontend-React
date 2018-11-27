import React from 'react'

const Vet = ({lastName,firstName,specialty}) => {
  return (
      <tr>
        <td>{lastName + ' ' + firstName}</td>
        <td>{specialty}</td>
      </tr>
  )
}

export default Vet