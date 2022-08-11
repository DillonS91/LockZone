import axios from "axios";
import { useState, useEffect } from 'react';
import { MasterRowComponent } from "./MasterRowComponent";
import { Table } from "react-bootstrap";

export const MasterComponent = () => {
    const [master, setMaster] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/master/')
        .then(res=>setMaster(res.data))
    },[])

    return(
        <Table>
            <thead>
                <tr>
                    <th>Users</th>
                </tr>
            </thead>
            <tbody>
                {master.map((mas)=>{
                    return <MasterRowComponent key={mas.masterId} mas={mas}/>;
                })}
            </tbody>
        </Table>
    );
}