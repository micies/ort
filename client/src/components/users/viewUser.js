import React from "react";
import { Modal } from "../Modal";



export const ViewUser = ({close_Modal, modalShown, dataOfUser}) =>{ 

return(

    <><Modal shown={modalShown.add} buttonName={"add"} close={close_Modal}
        children={<div>id: <h4>{dataOfUser.id}</h4>
            name:<h4>{dataOfUser.Name}</h4>
            ip:<h4>{dataOfUser.IP}</h4>
            phone:<h4>{dataOfUser.Phone}</h4></div>}>
        </Modal></>)}