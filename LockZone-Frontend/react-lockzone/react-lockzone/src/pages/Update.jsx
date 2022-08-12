import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EditWebsite } from '../component';


export const Update = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({masterId:'', webId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <EditWebsite locationState ={locationState}/>
    );
}
