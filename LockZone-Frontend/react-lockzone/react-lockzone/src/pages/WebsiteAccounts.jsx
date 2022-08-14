import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { CustomerPackage } from "../component/Website/WebsiteComponent";
import { Card, Table} from "react-bootstrap";
import {AccountsShow} from "../component/Accounts/AccountsShow"
import {Accounts} from "../component/Accounts/Accounts"

import { EditWebsite } from "../component/Website/EditWebsite";

export const WebsiteAccounts = () =>{
    
    const [mode, setMode] = useState('read')
    const [website, setWebsite] = useState([]);
    const [accounts, setAccounts] = useState([]);


    useEffect(() =>{
        axios.get(`http://localhost:8080/accounts/websiteId=${window.location.href.charAt(window.location.href.length - 1)}`)
        .then(res =>setAccounts(res.data));
    },[])

        
            return(
                <>
                    <h1 style={{textAlign:"center"}}>Accounts for Website</h1>  
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Account Id</td>
                                <td>Account Name</td>
                                <td>Account Password</td>  
                                <td>Update Account</td>   
                                <td>Delete Account</td>  
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((acc)=>{
                                return (
                                    <Accounts key={acc.accountId} acc={acc}/>
                                );
                                    
                            })}
                        </tbody>
                    </Table>   
                </>
            );
        
}