import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
    return (
        <div className="card" style={{width: "18"}}>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <Link to={props.ruta}><a className="btn btn-primary">Entrar</a></Link>
  </div>
</div>

    );
};

export default Cards;
