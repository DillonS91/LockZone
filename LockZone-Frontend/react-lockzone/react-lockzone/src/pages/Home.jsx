import Card from "react-bootstrap/Card"


// This is the Home page, will be directed here after login. Can access other poages from home

export const Home = () => {
    return( 
        <>
        <Card style= {{width:"50%", marginLeft:"25%", justifyContent:"center"}}>
            <Card.Body>
                Welcome to the LOCKZONE!
            </Card.Body>   
        </Card>  
        
        
        </> 
    );
}