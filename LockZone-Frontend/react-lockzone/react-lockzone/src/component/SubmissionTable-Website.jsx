import axios from 'axios';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

export const SubmissionTable_Website = () => {
    
    const urlNameRef = useRef();

    const handleSubmit = async (event) => {
        
        try {
            event.preventDefault();
            await axios.post('http://localhost:8080', 
                {
                    urlName: urlNameRef.current.value
                }
            );
            urlNameRef.current.value='';
        } catch (error) {
            console.log(error);
        } 
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Enter a new Website</h1>
            <input name = 'urlName' ref = {urlNameRef} placeholder='Enter website url'/>
            <br/>
            <button type="button" class="btn btn-primary">Submit</button>
        </form>
    );
}