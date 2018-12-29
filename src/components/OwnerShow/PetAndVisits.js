import React from 'react'

const PetAndVisits = ({name,birthdate,type,lastvisitdate,lastvisitdesc}) => {
    return (
        <table class="table" style={{width: 40 + 'em'}}>
        <tr>
            <td valign="top" style={{width: 8 + 'em'}}>
                <dl class="dl-horizontal">
                    <dt>Name</dt>
                    <dd>{name}</dd>
                    <dt>Birth Date</dt>
                    <dd>{birthdate}</dd>
                    <dt>Type</dt>
                    <dd>{type}</dd>
                </dl>
            </td>
            <td valign="top">
                <table class="table-condensed">
                    <thead>
                    <tr>
                        <th>Last Visit Date</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                        <tr>
                            <td>{lastvisitdate}</td>
                            <td>{lastvisitdesc}</td>
                        </tr>
                </table>
            </td>
        </tr>
    </table>
    )
  }

  export default PetAndVisits