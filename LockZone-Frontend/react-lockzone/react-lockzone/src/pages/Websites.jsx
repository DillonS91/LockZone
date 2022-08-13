import {Card, Form, Button} from "react-bootstrap";
import { WebsiteComponent } from '../component/Website/WebsiteComponent';
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


export const Websites = () => {
    const[websites, setWebsites] = useState([]);
    const queryRef = useRef();
    const [cookies, setCookie] = useCookies();

    useEffect(()=>{
        axios.get(`http://localhost:8080/websites/find?q=${cookies['username']}`).then(res => setWebsites(res.data));
    })

    const search = async(event) =>{
        try{
            event.preventDefault();
            axios.get(`http://localhost:8080/websites/like?urlname=${queryRef.current.value}`)
            .then(res => setWebsites(res.data));
        }catch(err){
            console.error(err);
        }
    }
    return(
        <>
            <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
            <h1 style={{textAlign:'center'}}>Websites</h1>
            <Form onSubmit={search} className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={queryRef}
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                        </Form>
            <Card.Body>
                <WebsiteComponent websites={websites} />
            </Card.Body>
            </Card>
        </>
    );
}