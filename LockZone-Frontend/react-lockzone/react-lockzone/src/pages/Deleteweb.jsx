import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DeleteWebsite } from '../component';


export const Deleteweb = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({websiteId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <DeleteWebsite locationState ={locationState}/>
    );
}