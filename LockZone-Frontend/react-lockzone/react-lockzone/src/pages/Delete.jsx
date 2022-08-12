import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DeleteWebsite } from '../component';

export const Delete = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({urlName:'' ,webId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <DeleteWebsite locationState = {locationState} />
    );
}