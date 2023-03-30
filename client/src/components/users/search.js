import React, { useState, useEffect, useRef } from "react";


export default function Search({user, setUser}){

    const [searchInput, setSearchInput] = useState("");
    const saveBeforeSearch = useRef(); 

    useEffect(() => {
        saveBeforeSearch.current = user

      }, []);
    
    const handleChange = (e) => {
        console.log(e.keyCode)
        setSearchInput(e.target.value)
        if (e.keyCode === 13) {
          handleSubmit()
        };
      };
    
      
      const handleSubmit = () => {
        if (!searchInput.length){
          return setUser(saveBeforeSearch.current)}
        else if (searchInput.length > 0) { 
          const afterFilter = user.filter((states) => {
            return states.Name.match(searchInput)
          })
          setUser(afterFilter)
        }
      }
  return(
    <><input
    type="search"
    className="search_input"
    placeholder="Search here"
    onChange={handleChange} // need to check nif needed here
    onKeyDown={(e) => handleChange(e)}/>

        </>
      )
}




  