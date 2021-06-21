import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
        <section className= "Photos">
            <div className= "row">
        {props.photos.map(function(photo, index) {
            return (
                <div className="col-4 g-0" key={index}>"
                <a href= {photo.src.original} target= "blank" rel="noreferrer">
               <img src= {photo.src.tiny} alt="images" className= "img-fluid"/>
                </a>
                </div>
            );
        })}
            </div>
        </section>
        );
    } else {
        return null;
    }
}