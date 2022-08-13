import React from 'react'
import { useNavigate, Link  } from 'react-router-dom'
import { Button } from 'react-bootstrap';


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
              <Link to="/update" state={{masterId: website.master.masterId, websiteId: website.websiteId}}><Button variant="primary">Update</Button></Link>
          </td>
          <td>  
              <Link to="/home" state={{name: website.name, webId: website.websiteId}}><Button variant="danger">Delete</Button></Link>
          </td>
        </tr>
      )
}