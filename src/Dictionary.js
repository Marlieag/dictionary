import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
    
function search (event){
    event.preventDefault();
    alert (`Searching for ${keyword}`);
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
