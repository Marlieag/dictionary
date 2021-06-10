import React from "react";

export default function Phonetic (props){
    console.log(props.phonetic);
    return (
        <div className= "phonetic">
            {props.phonetic.text}
        </div>
    );
}