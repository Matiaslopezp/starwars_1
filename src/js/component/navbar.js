import React, {useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div className="btn-group dropstart">
                  <button className="btn btn-outline-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ❤
                  </button>
                    
                    <ul className="dropdown-menu">
                    {store.favoritos.map((value,index)=>{
                      return (<li key={index} className="dopdown-item"> {value}  <button><i class="fas fa-trash-alt"></i></button></li>)
                    })}
                    </ul>
                  </div>
		</nav>
	);
};
