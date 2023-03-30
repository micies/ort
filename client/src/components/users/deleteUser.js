import React, {useState} from "react";
import { Modal } from "../Modal";
import { Delete } from "../../BaseService";


export const DeleteUser = ({ setUser, close_Modal, user, modalShown, id}) =>{ 
    const BASE_URL = process.env.REACT_APP_BASE_URL;  //global variable
    const deleteItem = (id) => {
        console.log(id)
        Delete(BASE_URL + "/users", id)
        setUser((current) =>
        current.filter((user) => user.id !== id)
        );
      };

    return(

    <>
      <Modal shown={modalShown.delete} buttonName={"delete"} close={close_Modal} fun={() => { deleteItem(id); close_Modal()}}
        children={<div>
          are you want delete the
          <h4>{id}</h4>
        </div>}>
      </Modal></>

    )
}