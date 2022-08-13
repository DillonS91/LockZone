import {useNavigate} from "react-router-dom";
import axios from "axios";

export const MasterWebsites = ({web}) =>{
    const navigate = useNavigate();
    const handleClick = async (web) =>{
        axios.get('http://localhost:8080/websites/masterId=${web.websiteId}')
        .then(res => navigate(`/accounts/${res.data}`));
    }
    return(
        <tr onClick={() => handleClick(web)} key={web.websiteId}>
            <td>{web.websiteId}</td>
            <td>{web.urlName}</td>
        </tr>
    )
}