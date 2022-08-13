import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EditWebsite } from '../component';


export const UpdateWebsite = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({masterId:'', websiteId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <EditWebsite locationState ={locationState}/>
    );
}