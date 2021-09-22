import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Button from "react-bootstrap/Button";
import Photos from "./Photos";
import Card from "react-bootstrap/Card";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);


function handleResponse(response) {
    setResults(response.data[0]);
}
function handlePexelsResponse (response) {
    console.log(response.data);
    setPhotos(response.data.photos);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApi= "563492ad6f91700001000001de18a2b3cff945a0afe5d0bcabd18482";
    const pexelsUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers= { Authorization: `Bearer ${pexelsApi}` };
    axios.get(pexelsUrl, { headers: headers}).then(handlePexelsResponse);
}
function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
    <div className="dictionaryApp">
        <div className= "container">
    <header className="text-center">
    <Card className="bg-dark text-white">
  <Card.Img src="/popart.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>
         <h1>The  <br/> Dictionary</h1>
    </Card.Title>
  </Card.ImgOverlay>
</Card>
      </header>
        <div className= "searchEngine">
        <form className="text-center" onSubmit= {handleSubmit}>
            <div className="row">
        <div className="col">
            <div className="search-bar">
            <input 
            type= "text" 
            placeholder="Search for a word..." 
            onChange = {handleKeywordChange}          
            />
            </div>
        </div>
        <div className="col-4 sm">
            <div className= "search-button">
            <Button variant="dark" type ="button" size="md" onClick= {handleResponse}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </Button>
            </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        <Results results= {results}/>
        <Photos photos= {photos}/>
        <div className="footerImage">
         <img src="/Book.png" alt="book" width="100"/>
        </div> 
        </div>       
    
    );

}

