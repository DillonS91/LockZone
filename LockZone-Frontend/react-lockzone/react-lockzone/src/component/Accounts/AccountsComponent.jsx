import axios from "axios";
import { useState, useEffect } from "react";
import { AccountRowComponent } from "./AccountRowComponent";
import { Table } from "react-bootstrap";

export const AccountsComponent = () => {
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/accounts?page0&size=20')
        .then(res=>setAccount(res.data));
    },[])

    return(
        <Table>
            <thead>
                <tr>
                    <th>Accounts</th>
                </tr>
            </thead>
            <tbody>
                {account.map((acc)=>{
                    return <AccountRowComponent key={acc.accountId} acc={acc}/>;
                })}
            </tbody>
        </Table>
    );
}