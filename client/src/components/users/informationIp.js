import React, { useState, useEffect } from "react";
import { GetIP } from "../../BaseService";
import { Modal } from "../Modal";



export default function ShowInformation  ({close_Modal, modalShown, ip}) {
    const [informationIp, setInformationIp] = useState({})
    const url = `http://ip-api.com/json/${ip}`
    
    useEffect( () => {
       GetIP(url, setInformationIp)
      }, []);

    return (<><Modal shown={modalShown.informationIP} close={close_Modal} buttonName={"nothing"}><div>
            <h3>{ip}</h3>
      {Object.entries(informationIp).map(([key, value]) => (
        <h4>{key}: {value}</h4>
      ))}
    </div></Modal></>)

  }
  