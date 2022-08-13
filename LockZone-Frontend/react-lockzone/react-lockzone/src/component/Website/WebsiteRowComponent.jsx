import { Link } from "react-router-dom";

export const WebsiteRowComponent = ({web}) => {

    return(
        <tr>
            <td>{web.urlName}</td>
            <Link to="/delete" 
                state={{urlName: web.urlName, webId: web.websiteId}}
            >Delete</Link>
            <Link to="/update"
                state={{masterId: web.master.masterId, webId: web.websiteId}}
            >Update</Link>
        </tr>
    );
}