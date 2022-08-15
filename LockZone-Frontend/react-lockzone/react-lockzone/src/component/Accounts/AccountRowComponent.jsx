import { Button } from "react-bootstrap";
import { useNavigate, Link} from 'react-router-dom'
import { useEffect, useState } from "react";


export const AccountRowComponent = ({ acc }) => {
    return(
        <tr>
            <td>
                <Link to="/createAcc" state={{websiteId: acc.website.websiteId, accountId: acc.accountId}}><Button variant="success">Create</Button></Link>
            </td>
        </tr>
    );
}