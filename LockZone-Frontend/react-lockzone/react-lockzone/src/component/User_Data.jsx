import { useState, useEffect } from 'react';
import axios from 'axios';
import { Data_Return } from './Data_Return';

export const User_Data = () => {
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
                        return <Data_Return key={ d.id } d={ d }/>
                    })}
                </tbody>
            </table>
        </>
    );
}