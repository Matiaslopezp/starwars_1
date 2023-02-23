import React from "react";
import { Link } from "react-router-dom";

export const Cards_2 = (props) => {
    return (<div className="card">
           {/* < img src = "..." className = "card-img-top" alt = "..." />*/}
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.info}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

    );
};