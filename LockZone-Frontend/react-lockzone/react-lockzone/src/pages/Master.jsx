import {Card, Col, Row,Form, Button} from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import {EditMaster} from "../component/Master/EditMaster"
import {DeleteMaster} from "../component/Master/DeleteMaster"
import { MasterComponent } from "../component";
import {useNavigate} from 'react-router-dom'


export const Master =() =>{
    const check = useNavigate();
    const[master, setMaster] = useState();
    const [cookies, setCookie] = useCookies();
    const[renderEditMaster, setRenderEditMaster] = useState(false);
    const[renderDeleteMaster, setRenderDeleteMaster] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${cookies['username']}`)
        .then(res => {
            setMaster(res.data);
        })
    },[])

    const handleClick = async() => {
        check(`/websites`, {state:{username:master}})
    }

    if(master !== undefined & master !== '') {
        return(
            <Card style={{width:"75%", marginLeft:"10%"}}>
                {!renderEditMaster && !renderDeleteMaster &&<>
                <Row>
                    <h1 style={{textAlign: "center"}}>Current Login Information </h1>
                </Row>
                <Row striped border hover className= "MasterInfo" onClick={handleClick}>
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
                {renderDeleteMaster && <DeleteMaster master={master} setMaster={setMaster} renderDeleteMaster= {renderDeleteMaster} setRenderDeleteMaster={setRenderDeleteMaster}/>}
                {!renderDeleteMaster && <div><Button onClick={() => setRenderDeleteMaster(!renderDeleteMaster)}>Delete Account</Button></div>}
            </Card>
        )
    }

    
}
