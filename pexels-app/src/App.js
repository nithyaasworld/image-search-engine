import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import ImageCard from "./ImageCard";
import API_KEY from "./pexel-config";
const CURATED_PHOTO_URL = "https://api.pexels.com/v1/curated";
const SEARCH_IMAGE_URL = "https://api.pexels.com/v1/search?query=";

function App() {
  let [photosList, setPhotosList] = useState([]);
  let [searchError, setSearchError] = useState("");
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(CURATED_PHOTO_URL, {
      method: 'get',
      headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    }}).then((resp) => resp.json()).then((data)=>{
      setPhotosList(data.photos.map((image)=> image.src.medium));
      setLoading(false);
    })
  },[])

  const keyPressHandler = (e) => {
    if(e.target.value.trim() !== ""  && e.which === 13){
      setSearchError(() => "");
      setLoading(() => true);
      fetch(SEARCH_IMAGE_URL + e.target.value, {
        method: 'get',
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
      }}).then((resp) => resp.json()).then((data)=>{
        if(data.photos.length === 0){
            setSearchError(() => "No matching results found. Please try with different search keyword.");
        }else {
          setPhotosList(data.photos.map((image)=> image.src.medium));
        }
      }).finally(()=> setLoading(false));
    }
  }
  return (
    <div className="app-container">
      <div className="search-bar-container">
        <input onKeyPress={keyPressHandler} placeholder="e.g. apples nature" id="search-text-box" name="search-text-box" type="text"></input>
        <label htmlFor="search-text-box" >Search</label>
      </div>
      {searchError.length > 0 && <p style={{color: 'red', marginTop: '-2em', marginBottom: '2em', textAlign: 'center'}}>{searchError}</p> }
      <div className="display-area">
        {loading && <LoadingAnimation />}
        {photosList.length > 0 && photosList.map((photo) => <ImageCard key={photo} imageurl={photo} />)}
      </div>
    </div>
  );
}

export default App;
