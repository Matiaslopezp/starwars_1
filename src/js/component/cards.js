import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
    return (
        <div classNameName="card text-center" >
            <div classNameName="card-body">
                <h5 classNameName="card-title">{props.titulo}</h5>
                <Link to={props.ruta}>
                    <a  classNameName="btn btn-primary">Entrar</a>
                </Link>
            </div>
        </div>

    );
};


