import React from "react";
import { Link } from "react-router-dom";
import { Cards_2 } from "../component/cards2";
import {Boton} from "../component/boton.js"

export const Personajes= () => (
	<div className="text-center mt-5 ">
		<h1>Personajes</h1>
		<div className="container">
		<Cards_2 titulo="Personaje 1" boton="❤️"/>
		<Cards_2 titulo="Personaje 2" boton="❤️"/>
		<Cards_2 titulo="Personaje 3" boton="❤️"/>
		<Cards_2 titulo="Personaje 4" boton="❤️"/>
		<Cards_2 titulo="Personaje 5" boton="❤️"/>
		<Cards_2 titulo="Personaje 1" boton="❤️"/>
		<Cards_2 titulo="Personaje 2" boton="❤️"/>
		<Cards_2 titulo="Personaje 3" boton="❤️"/>
		<Cards_2 titulo="Personaje 4" boton="❤️"/>
		<Cards_2 titulo="Personaje 5" boton="❤️"/>
		
		</div>
		<div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/"/>
             </div>
		

	</div>
	
);