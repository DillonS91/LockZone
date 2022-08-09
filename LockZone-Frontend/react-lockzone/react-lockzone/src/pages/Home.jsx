import { AccordionRender, CreateNewEntryTable } from "../component";
import { Container } from "react-bootstrap";

// This is the Home page, will be directed here after login. Can access other poages from home

export const Home = () => {
    return( 
        <Container>
            <CreateNewEntryTable/> 
            <br/>
            <AccordionRender/>
        </Container>  
    );
}