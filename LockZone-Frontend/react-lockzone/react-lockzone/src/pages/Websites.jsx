import {Card, Form, Button} from "react-bootstrap";
import { WebsiteComponent } from '../component/Website/WebsiteComponent';
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { Cookies, useCookies, withCookies } from "react-cookie";


export const Websites = () => {
    const[websites, setWebsites] = useState([]);
    const queryRef = useRef();
    const [cookies, setCookie] = useCookies();

    useEffect(()=>{
        axios.get(`http://localhost:8080/websites/find?name=${cookies['username']}`).then(res => setWebsites(res.data));
    },[]);

    // const search = async(event) =>{
    //     try{
    //         event.preventDefault();
    //         if(empty())
    //         axios.get(`http://localhost:8080/websites/like?name=${queryRef.current.value}`)
    //         .then(res => setWebsites(res.data));
    //     }catch(err){
    //         console.error(err);
    //     }
    // }
    return(
        <>
            <Card style={{width: "50%", alignContent:"center", marginLeft:"25%"}}>
            <h1 style={{textAlign:'center'}}>Websites</h1>
            {/* <Form onSubmit={search} className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={queryRef}
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                        </Form> */}
            <Card.Body>
                <WebsiteComponent websites={websites} />
            </Card.Body>
            </Card>
        </>
    );
}