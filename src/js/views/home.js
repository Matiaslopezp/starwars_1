import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";



export const Home = () => {
	
	const{store,actions}= useContext(Context);
	
	useEffect(()=>{
		actions.testGetStore();
		actions.testGetActions();
	},[])
	
	return(
	<div className="text-center mt-5">
		<h1>Blog Star Wars</h1>
		<div className="container fluid my-5">
		<Cards titulo="Planetas" ruta="/planetas"/>
		<Cards titulo="Personajes" ruta="/personajes"/>
		</div>
	</div>);
}
