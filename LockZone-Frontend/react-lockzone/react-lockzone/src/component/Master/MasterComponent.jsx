<<<<<<< HEAD
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
=======
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
>>>>>>> cf8f1ec6b8e284d3302b4a760e28ed47dd98a97a
}