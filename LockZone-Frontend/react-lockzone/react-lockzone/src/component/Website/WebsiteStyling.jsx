// import{Form} from "react-bootstrap";
// import {useRef} from "react";

// export const WebsiteStyling= ({ mode, web, accounts, type }) => {
//     const websiteRef = useRef(web.accounts !== undefined ? web.accounts.accountId : "Exists");
    
//     if(mode === 'read'){
//         return(
//             <tr>
//                 <td>{web.websiteId}</td>
//                 <td>{web.urlName}</td>
//                 <td>{web.master.masterId}</td>
//                 <td>{web.master.username}</td>
//                 <td>{web.master.firstName}</td>
//                 <td>{web.master.lastName}</td>
//                 <td>{web.master.email}</td>
               
//             </tr>
//         );
//     } else if(mode === 'edit'){
//         return(
//             <tr>
//                 <td>{web.masterid}</td>
//                 <td><Form>
//                     <input onChange={(e) => {web.urlName = e.target.value}} placeholder={web.urlName} />
//                 </Form></td>
//                 <td></td>
//             </tr>
//         )
//     }
// }