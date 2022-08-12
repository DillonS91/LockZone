import {useNavigate} from 'react-router-dom'

export const MasterOne = ({master}) =>{
    const check = useNavigate();

    const handleClick = async() => {
        check(`./${master.masterId}`, {state:{masterId:master}})
    }

    return(
        <tr onClick={handleClick}>
            <td>{master.username}</td>
            <td>{master.firstName}</td>
            <td>{master.lastName}</td>
            <td>{master.email}</td>
        </tr>
    )
}