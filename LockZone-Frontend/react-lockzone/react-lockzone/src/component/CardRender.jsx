import { Accordion, Button } from "react-bootstrap";

export const CardRender = () => {
    return(     
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <div>
                <Button>Update</Button>
                <Button>Delete</Button>
            </div>
        </Accordion.Body>
    );
}