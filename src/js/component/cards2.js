import React from "react";
import { Link } from "react-router-dom";

export const Cards_2 = (props) => {
    return (<div className="card" style={{width: "18rem"}}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Entrar</a>
      <Link to={props.ruta}><button className="btn btn-warning position-absolute bottom-0 end-0 translate-middle-x mb-2" onClick={()=>
      actions.addFav(props.titulo)  
    }>{props.boton}</button></Link>
    </div>
  </div>
    );
};

export default Cards_2;