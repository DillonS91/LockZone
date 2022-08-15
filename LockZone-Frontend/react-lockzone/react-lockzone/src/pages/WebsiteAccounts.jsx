import { useEffect, useState } from "react";
import axios from "axios";
import { CustomerPackage } from "../component/Website/WebsiteComponent";
import { Card, Table, Button} from "react-bootstrap";
import {Accounts} from "../component/Accounts/Accounts"
import {AddAccount} from "../component/Accounts/AddAccount"
import { useCookies } from "react-cookie";


export const WebsiteAccounts = () =>{
   // const [master,setMaster] = useState();
    const [website, setWebsite] = useState([]);
    const [account, setAccount] = useState([]);
    const[renderAddAccount, setRenderAddAccount] = useState(false);
    
    useEffect(() =>{
        axios.get(`http://localhost:8080/accounts/websiteId=${window.location.href.charAt(window.location.href.length - 1)}`)
        .then(res =>setAccount(res.data));
    },[])

    return(
        <>
        <Card style={{width: "60%", alignContent:"center", marginLeft:"20%"}}>
            <h1 style={{textAlign:"center"}}>Accounts for Website</h1>  
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Account Id</td>
                        <td>Account Name</td>
                        <td>Account Password</td>  
                        <td>Update Account</td>   
                        <td>Delete Account</td>
                        <td>Create New Account</td>
                    </tr>
                </thead>
                <tbody>
                    {account.map((acc)=>{
                        return (
                            <Accounts key={acc.accountId} acc={acc}/>
                        );    
                    })}
                </tbody>
            </Table>   
            </Card>
        </>
    );
    
        
}