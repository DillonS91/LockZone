import { AddMaster } from "../component/Master/AddMaster";
import {Card} from 'react-bootstrap'

export const SignUp  = () => {
    return(
        <Card style={{width:"50%", marginLeft:"25%", justifyContent:"center"}}>
        <Card.Body>
            <AddMaster/>
        </Card.Body>
        </Card>
    );
}