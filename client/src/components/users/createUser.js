import React, {useState} from "react";
import { Modal } from "../Modal";
import { Post } from "../../BaseService";
import { Input } from "../../inputProps";
import Validator from "./validateUser";

export const CreateUser = ({setModalShown, setUser, close_Modal, user, modalShown}) =>{ 
    const BASE_URL = process.env.REACT_APP_BASE_URL;  //global variable

    const [saveToCreate, setSaveToCreate] = useState({}); //sat and names

 
    const saveForCreate = (e) => {
    setSaveToCreate({
      ...saveToCreate, [e.target.name]: e.target.value
    })

  }
  const sendCreate = async ()=>{
    Validator(saveToCreate)
    const response = await Post(BASE_URL + "/users", saveToCreate );
    const { id } = response.data[0];
    if (id){
      setUser([...user, { ...saveToCreate, id } ]);
    }
    close_Modal();
  }
return (

    <><button onClick={() => { setModalShown({ create: true, delete: false, edit: false, add: false, informationIP: false  }); } }>
        create
    </button><Modal shown={modalShown.create} close={close_Modal} fun={sendCreate} buttonName={"create"} children={           
       <div>name:<Input onChange={saveForCreate} name={"Name"} />
                ip:<Input onChange={saveForCreate} name={"IP"} />
                phone:<Input onChange={saveForCreate} name={"Phone"} />
            </div>   }>
   </Modal></>)}