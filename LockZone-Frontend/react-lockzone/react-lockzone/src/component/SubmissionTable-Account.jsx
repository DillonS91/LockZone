import axios from 'axios';
import { useRef } from 'react';

export const SubmissionTable_Account = () => {
    
    const userNameRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit = async (event) => {
        
        try {
            event.preventDefault();
            await axios.post('http://localhost:8080', 
                {
                    accname: userNameRef.current.value,
                    accpassword: userPasswordRef.current.value
                }
            );
            userNameRef.current.value='';
            userPasswordRef.current.value='';
        } catch (error) {
            console.log(error);
        } 
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Enter a new Account</h1>
            <input name = 'accname' ref = {userNameRef} placeholder='Enter user name'/>
            <br/>
            <input name = 'accpassword' ref = {userPasswordRef} placeholder='Enter password'/>
            <br/>
            <button type="button" class="btn btn-primary">Submit</button>
        </form>
    );
}