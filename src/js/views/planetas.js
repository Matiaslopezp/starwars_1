import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cards_2 } from "../component/cards2";
import {Boton} from "../component/boton.js"
import { Context } from "../store/appContext";



export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return <div className="container">
		<h1>Planetas</h1>
		<div className="row">
			{store.planetas.map((objeto, index) => {
				return <Cards_2 titulo={objeto.name} 
				rutaDetalle={"/detalle/planetas/"+ objeto.uid}
				boton="❤️" 
				img="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"/>
			})}
		</div>
		<div className="d-flex justify-content-center container-fluid pb-5">
			<Boton ruta="/" />
		</div>

	</div>}