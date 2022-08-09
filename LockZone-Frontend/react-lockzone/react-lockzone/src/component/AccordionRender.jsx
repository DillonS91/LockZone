import { CardRender } from "./CardRender";
import { Accordion, Button } from "react-bootstrap";
//import { useState, useEffect } from "react";
//import { Axios } from "axios";


export const AccordionRender = () => {

    // add axios call and hook impl. here

    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>GitHub.com</Accordion.Header>

                <CardRender/>

                <Accordion.Body>
                Username: Nobody_Nose_2_electricbogaloo <br/>
                    Password: 12345password 
                    <div>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </div>
                </Accordion.Body>   

            </Accordion.Item> 

            <Accordion.Item eventKey="1">
                <Accordion.Header>Twitter.com</Accordion.Header>

                <Accordion.Body>
                    Username: yourname@email.com <br/>
                    Password: A!S@D#F$  
                    <div>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </div>
                </Accordion.Body>   

            </Accordion.Item> 
        </Accordion>
    );
}