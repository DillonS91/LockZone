

export const AccountRowComponent = ({ acc }) => {
    return(
        <tr>
            <td>{acc.accnames}</td>
            <td>{acc.accpassword}</td>
            <td>{acc.masterId}</td>
        </tr>
    );
}