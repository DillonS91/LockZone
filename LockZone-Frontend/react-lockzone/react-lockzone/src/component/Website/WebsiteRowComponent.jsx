import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


export const WebsiteRowComponent = ({ web }) => {
    
    // const navigate = useNavigate();
    // const navigateToUpdate = () =>{
    //     navigate({
    //         pathname: '/Update/parameter-data',
    //         state: {masterId: web.master.masterId, webId: web.websiteId}
    //     });
    // }
   
    // const handleDelete = async (event) => {
    //     try{
    //         event.preventDefault();
    //         await axios.delete(`http://localhost:8080/websites/${web.websiteId}` )
    //     }catch (err){
    //         console.error(err);
    //     };         
    // }

    return(
        <tr>
            <td>{web.urlName}</td>
            <td>{web.master.masterId}</td>
            {/* <Button type='button' onClick={handleDelete}>Delete</Button> */}
            <Link to="/delete" 
                state={{urlName: web.urlName, webId: web.websiteId}}
            >Delete</Link>
            <Link to="/update"
                state={{masterId: web.master.masterId, webId: web.websiteId}}
            >Update</Link>
        </tr>
    );
}