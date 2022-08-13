import { Table } from "react-bootstrap";
import{WebsiteOne} from './WebsiteOne'


export const WebsiteComponent = ({websites}) => {
    return (
        <Table striped border="5" hover >               
                <thead>
                    <tr>
                        <th>Urlname</th>            
                    </tr>
                </thead>
                <tbody>
                    {websites.map((website) => {
                            return (
                                <WebsiteOne key={website.websiteId} website={website}/>
                            );
                    })}
                </tbody>
    
            </Table>
      )
}