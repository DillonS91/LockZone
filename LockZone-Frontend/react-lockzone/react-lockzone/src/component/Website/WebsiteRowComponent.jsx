

export const WebsiteRowComponent = ({ web }) => {
    return(
        <tr>
            <td>{web.urlName}</td>
            <td>{web.master.name}</td>
            <td>{web.master.password}</td>
        </tr>
    );
}