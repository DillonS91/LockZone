
import Navbar from 'react-bootstrap/Navbar';
export const Navigation = ({children}) => {
    return(
        <Navbar expand bg="dark">
            {children}
        </Navbar>
    );
}