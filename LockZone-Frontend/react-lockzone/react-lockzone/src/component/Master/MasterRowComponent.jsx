

export const MasterRowComponent = ({ mas }) => {
    return(
        <tr>
            <td>{mas.masterId}</td>
            <td>{mas.name}</td>
        </tr>
    );
}