import axios from "axios";
import { Button } from "react-bootstrap";


export const WebsiteRowComponent = ({ web }) => {
   
    const handleDelete = async (event) => {
    
        try{
            event.preventDefault();
            await axios.delete(`http://localhost:8080/websites/${web.websiteId}` )
        }catch (err){
            console.error(err);
        };        
        
    }

    return(
        <tr>
            <td>{web.urlName}</td>
            <Button onClick={handleDelete}>Delete</Button>
        </tr>
    );
}