import React, { useState, useEffect} from "react";
import { Get } from "../../BaseService";
import  ShowInformation from "./informationIp";
import { CreateUser } from "./createUser";
import { UpdateUser } from "./updateUser";
import { ViewUser } from "./viewUser";
import { DeleteUser } from "./deleteUser";
import Search from "./search";



export default function Users() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;  //global variable
  const [users, setUsers] = useState([]);

  const [modalShown, setModalShown] = useState({ delete: false, edit: false, add: false, create:false, informationIP: false });
  const [ saveDataForModal, setSveDataForModal] = useState([]);

  useEffect(() => {
    Get(BASE_URL + "/users", setUsers)
  }, []);

  const close_Modal = () => {
    setModalShown({create:false, delete: false, add: false, edit: false , informationIP: false })
  }

  if (users.errorMessage) {
    return <div>{users.errorMessage}</div>
  }
  return (
    <div className="table-wrapper">
      <Search user={users} setUser={setUsers}/>
      <div> <CreateUser setModalShown={setModalShown} setUser={setUsers}  close_Modal={close_Modal} user={users} modalShown={modalShown}/></div>
     
      {(
        <table id='employee'>
          <tbody>
            <tr>
              <th>name</th>
              <th>id</th>
              <th>ip</th>
              <th> data for ip</th>
              <th>phone</th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.id}</td>
                <td>{user.IP}</td>
                <td><button onClick={() => { setModalShown({create:false, delete: false, add: false, edit: false,  informationIP: true  }); setSveDataForModal(user.IP) }}>
                data for ip
                  </button>
                  <ShowInformation close_Modal={close_Modal} modalShown={modalShown} ip={saveDataForModal}/>
                  </td>
                <td>{user.Phone}</td>
                <td>
                  <button onClick={() => { setModalShown({create:false, delete: true, add: false, edit: false,  informationIP: false  }); setSveDataForModal(user.id) }}>
                    delete
                  </button>
                  < DeleteUser setUser={setUsers}  close_Modal={close_Modal} user={users} modalShown={modalShown} id={saveDataForModal} />
                </td>
                <td>
                <button onClick={() => { setModalShown({ create: false, delete: false, add: true, edit: false, informationIP: false  }); setSveDataForModal(user)}}>
                  view
                  </button>
                  < ViewUser setModalShown={setModalShown} close_Modal={close_Modal} modalShown={modalShown} dataOfUser={saveDataForModal} />
                </td>
                <td>
                <button onClick={() => { setModalShown({ delete: false, edit: true, add: false, create: false, informationIP: false  }); setSveDataForModal(user) }}>
                    edit
                  </button>
                  < UpdateUser setModalShown={setModalShown} setUser={setUsers}  close_Modal={close_Modal} user={users} modalShown={modalShown} dataOfUser={saveDataForModal}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      )}
    </div>
  );
}





