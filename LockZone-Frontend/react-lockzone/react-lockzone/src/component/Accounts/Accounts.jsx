import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Accounts =({acc}) =>{

    return(
        <tr> 
            <td>{acc.accountId}</td>
            <td>{acc.accnames}</td>
            <td>{acc.accpassword}</td>
        </tr>
    );
}