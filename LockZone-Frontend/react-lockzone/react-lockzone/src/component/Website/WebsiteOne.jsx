import React from 'react'
import { useNavigate, Link  } from 'react-router-dom'


export const WebsiteOne =({website}) =>{
  const history = useNavigate();

  const handleClick = async() => {
    history(`./${website.websiteId}`, {state:{websiteId:website}})
  }
    return (
        <tr>
          {/* <td>{website.name}</td> */}
          <td onClick={handleClick}>{website.name}</td>
          <td>
            <Link to="/update" state={{masterId: website.master.masterId, websiteId: website.websiteId}}>Update</Link>
          </td>
          <td>  
              <Link to="/home" state={{name: website.name, webId: website.websiteId}}>Delete</Link>
          </td>
        </tr>
      )
}