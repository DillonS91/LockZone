
import {Table} from 'react-bootstrap';
import {MasterOne} from './MasterOne';

export const MasterComponent = ({master}) =>{
    return(
        <Table striped border hover>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>                
                </tr>
            </thead>
        <tbody>
            {master.map((master) =>{
                return(
                    <MasterOne key={master.masterId} master={master}/>
            );
        })}
            
        </tbody>
        </Table>
    )
}