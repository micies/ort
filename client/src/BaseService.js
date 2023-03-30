import axios from 'axios'



export  function Get(BaseUrl, data) {
  axios.get(BaseUrl)
.then(res => {
  if(!res.data) {
    data({ errorMessage: "not found" })
  }
  else{
    console.log(res.data)
    const persons = res.data[0];
    data( persons.items );
  }
}).catch(error => {
  data({ errorMessage: error.message });
  console.error('There was an error!', error);
})
}


export const Update= async(BaseUrl, id, data) => {
  await axios.put(BaseUrl + id, data)
  .then( (response)=> {
    console.log(response);
    return response
  })
  .catch((error) =>{
    console.log(error);
  });
}


export function Delete(BaseUrl, id) {
  fetch(`${BaseUrl}/${id}`, {
    method: "DELETE",
  });
}

export async function Post(BaseUrl, data) {
  return await axios.post(BaseUrl, data)
  .then( (response)=> {
    console.log(response);
    return response;
  })
  .catch((error) =>{
    console.log(error);
  });
}

export const GetById = async (BaseUrl, id, data) => {
  await fetch(`${BaseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      data(json);
    });
};

export  function GetIP(BaseUrl, data) {
  axios.get(BaseUrl)
.then(res => {
  if(!res.data) {
    data({ errorMessage: "not found" })
  }
  else{
    console.log(res.data)
    data( res.data );
  }
}).catch(error => {
  data({ errorMessage: error.message });
  console.error('There was an error!', error);
})
}
