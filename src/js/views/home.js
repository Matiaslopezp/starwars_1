import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";




export const Home = () => (
	<div className="text-center mt-5">
		<h1>Blog Star Wars</h1>
		<Cards titulo="Planetas" ruta="/planetas"/>
		<Cards titulo="Personajes" ruta="/personajes"/>
		
	</div>
);
