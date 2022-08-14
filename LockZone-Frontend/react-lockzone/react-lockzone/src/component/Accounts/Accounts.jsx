import { Button } from "react-bootstrap";
import { useNavigate, Link} from 'react-router-dom'
import { useEffect, useState } from "react";



export const Accounts =({acc}) =>{

    return(
        <tr> 
            <td>{acc.accountId}</td>
            <td>{acc.accnames}</td>
            <td>{acc.accpassword}</td>
            <td>
                <Link to="/updateAcc" state={{masterId: acc.website.master.masterId, websiteId: acc.website.websiteId, accountId: acc.accountId}}><Button variant="primary">Update</Button></Link>
            </td>
            <td>  
                <Link to="/deleteAcc" state={{accountId: acc.accountId}}><Button variant="danger">Delete</Button></Link>
            </td>
        </tr>
    );
}