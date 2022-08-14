import { Table, Button } from "react-bootstrap";
import{WebsiteOne} from './WebsiteOne'
import { useNavigate, Link  } from 'react-router-dom'
import {AddWebsite} from "./AddWebsite"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


export const WebsiteComponent = ({websites}) => {
    const check = useNavigate();
    const[master,setMaster] = useState();
    const[website, setWebsite] = useState();
    const[renderAddWebsite, setRenderAddWebsite] = useState(false);
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${cookies['username']}`)
        .then(res => {
            setMaster(res.data);
        })
    },[])
    return (
        <Table striped border="5" hover >               
            <thead>
                <tr>
                    <th scope="col">URLNAME or APP</th>  
                    <th scope="col">UPDATE</th>
                    <th scope="col">DELETE</th>          
                </tr>
            </thead>
            <tbody>
                {websites.map((website) => {
                        return (
                            <WebsiteOne key={website.websiteId} website={website}/>
                        );
                })}
            </tbody>
            {renderAddWebsite && <AddWebsite website={website} setWebsite={setWebsite} renderAddWebsite= {renderAddWebsite} setRenderAddWebsite={setRenderAddWebsite} master={master}/>}
            {!renderAddWebsite && <div><Button onClick={() => setRenderAddWebsite(!renderAddWebsite)}>Create New Website</Button></div>}
        </Table>
      )
}