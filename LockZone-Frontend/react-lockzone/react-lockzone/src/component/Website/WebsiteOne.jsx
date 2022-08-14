import React from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import axios from 'axios';


export const WebsiteOne =({website}) =>{
  const navigate = useNavigate();

  // const handleClick = async() => {
  //   history(`./${website.websiteId}`, {state:{websiteId:website}})
  // }
  const handleClick = async(website) =>{
    axios.get(`http://localhost:8080/accounts/websiteId=${website.websiteId}`)
    .then(res =>navigate(`/websites/${website.websiteId}`));
  }
    return (
        <tr onClick={() =>handleClick(website)} key={website.websiteId}>
          <td >{website.name}</td>
          <td>
              <Link to="/updateWeb" state={{masterId: website.master.masterId, websiteId: website.websiteId}}><Button variant="primary">Update</Button></Link>
          </td>
          <td>  
              <Link to="/deleteweb" state={{websiteId: website.websiteId}}><Button variant="danger">Delete</Button></Link>
          </td>
        </tr>
      )
}