import { CardRender } from "./CardRender";
import { Accordion, Button } from "react-bootstrap";
//import { useState, useEffect } from "react";
//import { Axios } from "axios";


export const AccordionRender = () => {

    // add axios call and hook impl. here

    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>

                <CardRender/>

                <Accordion.Body>
                    LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. 
                    <div>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </div>
                </Accordion.Body>   

            </Accordion.Item> 

            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>

                <Accordion.Body>
                    LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <div>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </div>
                </Accordion.Body>   

            </Accordion.Item> 
        </Accordion>
    );
}