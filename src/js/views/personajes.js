import React from "react";
import { Link } from "react-router-dom";
import { Cards_2 } from "../component/cards2";


export const Personajes= () => (
	<div className="text-center mt-5">
		<h1>Blog Star Wars</h1>
		<Cards_2 titulo="Planetas"/>
		<Cards_2 titulo="Personajes"/>
		
	</div>
);