import React, { useContext } from "react";
import { Cards_2 } from "../component/cards2";
import { Boton } from "../component/boton.js"
import { Context } from "../store/appContext";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	return <div className="container">
		<h1>Personajes</h1>
		<div className="row">
			{store.personajes.map((objeto, index) => {
				return <Cards_2 titulo={objeto.name} 
				rutaDetalle={"/detalle/personajes/"+ objeto.uid}
				boton="❤️" 
				img="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg"/>
			})}
		</div>
		<div className="d-flex justify-content-center container-fluid pb-5">
			<Boton ruta="/" />
		</div>

	</div>

};