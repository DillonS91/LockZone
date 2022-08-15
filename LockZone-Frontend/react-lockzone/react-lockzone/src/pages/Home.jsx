import Card from "react-bootstrap/Card"
import { MDBFooter } from 'mdb-react-ui-kit';

// This is the Home page, will be directed here after login. Can access other poages from home

export const Home = () => {
    return( 
        <>
        <Card style= {{width:"50%", marginLeft:"25%", justifyContent:"center"}}>
            <Card.Body>
               <h1 style={{width:"100%", textAlign:"center"}}> Welcome to the LOCKZONE! </h1>
               <img class="center" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2KR-4wEK5JkvFzMdyP4SE4x0a0jOFEAbGw&usqp=CAU"}/>
               <MDBFooter bgColor='light' className='text-center text-lg-left'>
               <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='http://localhost:3000/home'>
                LockZone
                </a>
                <div className='text-dark'> All rights belong to Michael Teeple and Dillion Shomaker</div>
            </div>
            </MDBFooter>
            </Card.Body>
        </Card>
        </>  
    );
}