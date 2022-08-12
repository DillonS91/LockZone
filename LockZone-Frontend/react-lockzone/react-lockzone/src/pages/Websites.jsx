import { CreateNewEntryTable, WebsiteComponent } from "../component";
import { Container } from "react-bootstrap";

// This is the websites page. From here the user will be able to create new entries and look up existing entries

export const Websites = () => {
    return(
        <>
            <Container>
                <CreateNewEntryTable/> 
                <br/>
                <WebsiteComponent/>
            </Container>  
        </>
    );
}