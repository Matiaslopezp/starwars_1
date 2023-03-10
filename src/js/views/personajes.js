import React, { useContext } from "react";
import { Cards_2 } from "../component/cards2";
import { Context } from "../store/appContext";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	return<div className="container">
		<h1>Personajes</h1>
		<div className="row">
			{store.personajes.map((objeto, index) => {
				return <Cards_2 titulo={objeto.name}/>
			})}
		</div>
	</div>

};