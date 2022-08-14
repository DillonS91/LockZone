import {Table} from "react-bootstrap"
import {Accounts} from "./Accounts"

export const AccountsShow = ({accounts}) =>{
    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Website Name</td>
                        <td>Account Name</td>
                        <td>Account Password</td>       
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account)=>{
                        return <Accounts key={account.accountId} account={account} />
                    })}
                </tbody>
            </Table>
        
        </>
    );
}