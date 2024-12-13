import React, { useEffect, useState } from 'react'

export default function useFetchapi(apiPath,extra=[]) {
    var [apidata ,setApidata] = useState([]);

    useEffect(()=>{

        fetch(apiPath)
       .then(response=>response.json())
       .then(val=>{
        setApidata(val)
       })
    },extra)
  return apidata;
  
}
