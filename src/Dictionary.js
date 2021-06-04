import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
 
function handleResponse(response){
    console.log(response);
}
function search (event){
    event.preventDefault();
    alert (`Searching for ${keyword}`);

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_us/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}
function handleKeywordChange (event){
    setKeyword(event.target.value);
}
    return (
    <div className="dictionaryApp">
        <div className= "container">
        <div className= "searchEngine">
        <form className="text-center" onSubmit= {search}>
            <div className="row">
        <div className="col-8">
            <input 
            type= "text" 
            placeholder="Search for a word..." 
            onChange = {handleKeywordChange}          
            />
        </div>
        <div className="col-4 sm">
             <input
              type="submit"
              value="Search"
              className="btn btn-primary form-control w-50"
            />
        </div>
            </div>
        </form>
        </div>
        </div>
    </div>
    )
}
