import {Card, Col, Row,Form, Button} from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import {EditMaster} from "../component/Master/EditMaster"
import { MasterComponent } from "../component";

export const Master =() =>{
    const[master, setMaster] = useState();
    const [cookies, setCookie] = useCookies();
    const[renderEditMaster, setRenderEditMaster] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8080/user/${cookies['username']}`)
        .then(res => {
            setMaster(res.data);
        })
    },[])

    if(master !== undefined & master !== '') {
        return(
            <Card style={{width:"75%", marginLeft:"10%"}}>
                {!renderEditMaster && <>
                <Row>
                    <h1 style={{textAlign: "center"}}>Current Login Information </h1>
                </Row>
                <Row className= "MasterInfo">
                    <Col>
                        <h3>Username</h3>
                        <h4>{master.username}</h4>
                    </Col>
                    <Col>
                        <h3>First Name</h3>
                        <h4>{master.firstName}</h4>
                    </Col>
                    <Col>
                        <h3>Last Name</h3>
                        <h4>{master.lastName}</h4>
                    </Col>
                    <Col>
                        <h3>Email Address</h3>
                        <h4>{master.email}</h4>
                    </Col>
                </Row>
                </>}
                {renderEditMaster && <EditMaster master={master} setMaster={setMaster} renderEditMaster= {renderEditMaster} setRenderEditMaster={setRenderEditMaster}/>}
                {!renderEditMaster && <div><Button onClick={() => setRenderEditMaster(!renderEditMaster)}>Edit Account</Button></div>}
            </Card>
        )
    }

    
}
