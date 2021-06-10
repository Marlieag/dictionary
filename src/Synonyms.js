import React from "react";

export default function Synonyms(props){
    if (props.synonyms){
    return (
        <div className ="synonyms">
            <ul>
        {props.synonyms.map(function(synonym, index) {
            return (
                <span key={index}>
                <li>
                {synonym}
                </li>
                </span>
            );
            
        })}  
            </ul> 
        </div>
    );
    } else {
        return null;
    }
}