import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UpdateAccounts } from '../component';


export const UpdateAcc = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({masterId:'', websiteId:'',accountId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <UpdateAccounts locationState ={locationState}/>
    );
}