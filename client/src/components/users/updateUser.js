import React, {useState} from "react";
import { Modal } from "../Modal";
import { Update } from "../../BaseService";
import { Input } from "../../inputProps";
import Validator from "./validateUser";


export const UpdateUser = ({setUser, close_Modal, user, modalShown, dataOfUser}) =>{ 
    const BASE_URL = process.env.REACT_APP_BASE_URL;  //global variable
    const [dataToEdit, setDataToEdit] = useState([]);


    const saveForUpdate = (e) => {
        setDataToEdit({
          ...dataToEdit, [e.target.name]: e.target.value
        })
      }
      const sendUpdate = (id)=>{
        Validator(dataToEdit)
        const response = Update(BASE_URL + "/users/", id, dataToEdit) 
        if (response.id){
          setUser([...user, dataToEdit]);
        }
      }
    return(
        <><Modal shown={modalShown.edit} buttonName={"edit"} close={close_Modal} fun={() => { sendUpdate(dataOfUser.id); close_Modal(); } }>
                id:<Input value={dataOfUser.id} onChange={saveForUpdate} name={"id"} type={"text"} disabled={true} />
                name:<Input value={dataOfUser.Name} onChange={saveForUpdate} name={"Name"} />
                ip:<Input value={dataOfUser.IP} onChange={saveForUpdate} name={"IP"} />
                Phone:<Input value={dataOfUser.Phone} onChange={saveForUpdate} name={"Phone"} />
            </Modal></>

    )
}