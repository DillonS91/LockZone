//import { UserData } from "../component";
import { AccordionRender } from "../component";
import { Container } from "react-bootstrap";

// This is the Home page, will be directed here after login. Can access other poages from home

export const Home = () => {
    return( 
        <Container>
            <AccordionRender/>
        </Container>  
    );
}