import axios from "axios";
import { useRef} from "react";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export const AddAccount = ({acc}) => {
    
    return(
        <tr>
            hello
        </tr>
    )
}
//     const accnameRef = useRef();
//     const accpasswordRef = useRef();
//     const [cookies, setCookie] = useCookies();
    
//     // useEffect(() => {
//     //     axios.get(`http://localhost:8080/websites/${website.websiteId}`)
//     //     .then(resp => {
//     //         setWebsite(resp.data);
//     //     })
//     // },[])

//     const handleSubmit = async (event) => {
//         try {
//             const {data} = await axios.post(`http://localhost:8080/accounts`,
//             {
//                 accnames: accnameRef.current.value,
//                 accpassword: accpasswordRef.current.value,
//                 website: {
//                     websiteId: website.websiteId
//                 }
//             }
//             );
//             setAccount([data]);
//             setRenderAddAccount(!renderAddAccount);
//         } catch (err) {
//             console.error(err)
//         } 
//     }
    
//     return(
//         <Card.Body>
//             <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">
//                     <Col>{website.websiteId}</Col>
//                     <Form.Group as={Col} md="10">
//                         <Form.Label>Account Name</Form.Label>
//                                 <Form.Control type="text" placeholder="Please enter a new Account Name" name = 'accname' ref = {accnameRef} required/>
//                     </Form.Group>
//                     <Form.Group as={Col} md="10">
//                         <Form.Label>Account Password</Form.Label>
//                                 <Form.Control type="text" placeholder="Please enter a new Account Password" name = 'accpassword' ref = {accpasswordRef} required/>
//                     </Form.Group>
//                 </Row>
//                 <Button variant="success" type="submit">Submit form</Button>
//             </Form>
//         </Card.Body>
//     );
// }