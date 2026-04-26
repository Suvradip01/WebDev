import React, { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const [fetch,setFetch] = useState(false); // state to control when API should be called

  // useEffect runs when 'fetch' state changes
  useEffect(()=>{
    if(!fetch) return;  // if button is not clicked, do nothing 

    const FetchData = async ()=>{
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data)
      }
      catch(err){
        console.log(err)
      }
    };
    FetchData();
  },[fetch]);

  return(
    <button onClick={()=>setFetch(true)}>Fetch Data</button>
  );
}
export default App;