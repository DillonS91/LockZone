import { Table } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { WebsiteRowComponent } from "./WebsiteRowComponent";


export const WebsiteComponent = () => {
    const [website, setWebsite] = useState([]);


    //http://localhost:8080/websites?q=howard
    //http://localhost:8080/websites/4
    useEffect(()=>{
        axios.get('http://localhost:8080/websites?q=dan')
        .then(res => setWebsite(res.data))
    },[])

    return(
        <Table>   
            <thead>
                <tr>
                    <th>Websites</th>
                </tr>
            </thead>
            <tbody>
                {website && website.map((web) => {
                   return <WebsiteRowComponent key={web.websiteId} web={web}/>;
                })}
            </tbody>
        </Table>
    );
}