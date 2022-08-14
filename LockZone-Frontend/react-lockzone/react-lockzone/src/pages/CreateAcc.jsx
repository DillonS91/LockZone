import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CreateAccount } from '../component';

export const CreateAcc = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({websiteId:'',accountId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <CreateAccount locationState ={locationState}/>
    );
}