import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

function App(){
  
  const [data, setData] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(()=>{

    if(!data) return;

    const Getdata = async () => {
      try{
        const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=6");
        setImages(res.data);
      }
      catch(e){
        console.log(e)
      }
    };
    Getdata(); 
  },[data]);

  return(
    <>
      <div>
        <h1>Data Fetching</h1>
        <button onClick={() => setData(true)}>Fetch Data</button>
        <div>
          {images.map((photo) => (
            <Card key={photo.id} images={[{ src: photo.download_url, alt: photo.author }]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;