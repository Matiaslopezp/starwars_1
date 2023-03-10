import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Planetas } from "./views/planetas";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Cards } from "./component/cards";
import { Cards_2} from "./component/cards2";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetallePersonajes } from "./views/detallePersonaje";
import { DetallePlaneta } from "./views/detallePlaneta";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planetas" element={<Planetas/>} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/detalle/planetas/:id" element={<DetallePlaneta/>} />
						<Route path="/detalle/personajes/:id" element={<DetallePersonajes/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
