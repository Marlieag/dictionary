import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props){
    console.log(props.meaning);
    return(
        <div className= "meaning">
            <h3>
            {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function (definition, index) {
                return(
                    <div key={index}>
                    <p>
                    <div className="definition">
                        <strong>
                            Definition
                        </strong>
                    </div>
                        {definition.definition}
                    </p>
                    <p className="example">
                    <em> {definition.example}</em> 
                    </p>
                    <Synonyms synonyms={definition.synonyms}/>
                    </div>
                );
            })}
           
        </div>
    );
}