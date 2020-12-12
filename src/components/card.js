import React from "react";

function Card(props) {
    return (
        <> 
            <div className="col-sm-4">

                <a href={props.link}>
                <img className="rounded mx-auto d-block" src={props.image} alt={props.imageAlt}
                height="100px" width="100px" />
                </a>

                <h4 className="text-center"> {props.title} </h4>

                <p className="text-center"> {props.description} </p>

            </div>  
        </>
    )
}
export default Card;