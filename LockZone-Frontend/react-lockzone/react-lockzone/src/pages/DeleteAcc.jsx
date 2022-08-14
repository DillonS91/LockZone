import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DeleteAccounts } from '../component';


export const DeleteAcc = () => {
    const location = useLocation();
    const [locationState, setLocationState] = useState({accountId:''});

    useEffect(()=>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location]);

    return(
        <DeleteAccounts locationState ={locationState}/>
    );
}