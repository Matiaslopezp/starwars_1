import React from "react";
import { Link } from "react-router-dom";
import { Cards_2 } from "../component/cards2";
import {Boton} from "../component/boton.js"


export const Planetas= () => (
    <div className="text-center mt-5">

		<h1>Planetas</h1>

		<Cards_2 titulo="Planeta 1" boton="❤️"/>
		<Cards_2 titulo="Planeta 2" boton="❤️"/>
		<Cards_2 titulo="Planeta 3" boton="❤️"/>
		<Cards_2 titulo="Planeta 4" boton="❤️"/>
		<Cards_2 titulo="Planeta 5" boton="❤️"/>
		<Cards_2 titulo="Planeta 6" boton="❤️"/>
		<Cards_2 titulo="Planeta 7" boton="❤️"/>
		<Cards_2 titulo="Planeta 8" boton="❤️"/>
		<Cards_2 titulo="Planeta 9" boton="❤️"/>
		<Cards_2 titulo="Planeta 10" boton="❤️"/>

		<div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/"/>
             </div>
    </div>
);