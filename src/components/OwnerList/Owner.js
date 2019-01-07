import React from 'react'

const Owner = ({ownerId,lastName,firstName,address,city,telephone,pets}) => {
  return (
      <tr>
        <td><a href={"/owners/show/"+ownerId+"/"+lastName}>{lastName + ' ' + firstName }</a></td>
        <td>{address + ' ' + city}</td>
        <td>{telephone}</td>
        <td>{pets}</td>
      </tr>
      
  )
}


export default Owner