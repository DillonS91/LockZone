import React from 'react'
import { useNavigate } from 'react-router-dom'

export const WebsiteOne =({website}) =>{
  const history = useNavigate();


  const handleClick = async() => {
    history(`./${website.websiteId}`, {state:{websiteId:website}})
  }

    return (

        <tr onClick={handleClick}>
          <td>{website.name}</td>
        </tr>
      )
}