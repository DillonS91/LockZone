import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { CustomerPackage } from "../component/Website/WebsiteComponent";
import { Card, Table} from "react-bootstrap";

import { EditWebsite } from "../component/Website/EditWebsite";

export const WebsiteAccounts = ({locationState, websites}) =>{
    
    const [master, setMaster] = useState([]);
    const [website, setWebsite] = useState([]);
    const [accounts, setAccounts] = useState([]);

    const [renderEditWebsite, setRenderEditWebsite] = useState(false);

    const getData = async() =>{
        const res = await axios.get(`http:localhost:8080/accounts/websiteId=${locationState.websiteId}`);
        setAccounts(res.data);
    }
    return(
        <>
        
            <Card style = {{width: "50%", alignContent:"center", marginLeft:"25%"}}>
                {!renderEditWebsite && <>
                    <Card.Header style = {{textAlign: "center"}}>Accounts for this website</Card.Header>
                    <Card.Body style = {{textAlign:"center"}}>
                        <div>Hello</div>
                        <div>{website.name}</div>
                    </Card.Body> 
                </>}
                {
                    renderEditWebsite &&
                    <EditWebsite website={website} setWebsite={setWebsite} renderEditWebsite={renderEditWebsite} setRenderEditWebsite = {setRenderEditWebsite} />
                }

                    {/* <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>test</th>
                                <th>test2</th>
                            </tr>
                        </tbody>
                    </Table> */}
               

            </Card>
        </>
    );
}