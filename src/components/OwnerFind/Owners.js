import React from 'react'

const Owners = ({lastName,firstName,address,city,telephone,pets}) => {
    return (
        <tbody>
        <tr>
          <td style={{width: 40 + 'em'}}>Lastname</td><td style={{width: 20 + 'em'}}>{lastName}</td>
        </tr>
        <tr>
          <td>Firstname</td><td>{firstName}</td>
        </tr>
        <tr>
          <td>Address</td><td>{address + ' ' + city}</td>
        </tr>
        <tr>
          <td>Telephone</td><td>{telephone}</td>
        </tr>
        </tbody> 
    )
  }

  export default Owners