import {Card} from "react-bootstrap";
import { WebsiteComponent } from '../component/Website/WebsiteComponent';
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const Websites = () => {
    const[websites, setWebsites] = useState([]);
    const [cookies] = useCookies();

    useEffect(()=>{
        axios.get(`http://localhost:8080/websites/find?name=${cookies['username']}`).then(res => setWebsites(res.data));
    },[]);

    return(
        <>
            <Card style={{width: "50%", alignContent:"center", marginLeft:"25%"}}>
            <h1 style={{textAlign:'center'}}>Websites</h1>
           
            <Card.Body>
                <WebsiteComponent websites={websites} />
            </Card.Body>
            </Card>
        </>
    );
}