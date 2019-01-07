import React from 'react'

const Pet = ({name,birthDate,type,id}) => {
  return (
      <tr>
        <td><a href={"/pet/visit/"+id}>{name}</a></td>
        <td>{birthDate}</td>
        <td>{type}</td>
      </tr>
  )
}

export default Pet