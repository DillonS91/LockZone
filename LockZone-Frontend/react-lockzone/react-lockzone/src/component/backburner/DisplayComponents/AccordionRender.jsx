import { CardRender } from "./CardRender";
import { Accordion, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { axios } from "axios";

//  *****DO NOT USE*****
//   This does not work
export const AccordionRender = () => {
    const [website, setWebsite] = useState([]);
    
    useEffect(() =>{
        axios.get('http://localhost:8080/websites?q=howard')
        .then(res => setWebsite(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <>
            {website && website.map((web) => {
                return(
                    <Accordion>
                        <Accordion.Item eventKey={web.website_id}>
                            <Accordion.Header>{web.urlname}</Accordion.Header>
                            {/* <CardRender web = { web }/> */}
                            <Accordion.Body>
                                    Username: Nobody_Nose_2_electricbogaloo <br/>
                                    Password: 12345password 
                                <div>
                                    <Button>Update</Button>
                                    <Button>Delete</Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                );
            })}
        </>
    );
}