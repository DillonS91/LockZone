import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataReturn } from './DataReturn';

export const UserData = () => {
    const[uData, setUData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/')
            .then(res => setUData(res.data));
    },[]);
    
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {uData && uData.map(d =>{
                        return <DataReturn key={ d.id } d={ d }/>
                    })}
                </tbody>
            </table>
        </>
    );
}