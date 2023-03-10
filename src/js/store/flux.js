const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos:[],
			planetas:[],
			personajes:[],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			addFav:(nombre)=>{
				const store=getStore();
				console.log("planetas será agregado a favortios",nombre)
				setStore({favoritos:[...store.favoritos,nombre]})
			},
			getPlanetas:()=>{
				fetch("https://www.swapi.tech/api/planets")
				.then(response=>response.json())
				.then(data=>{
					console.log(data.results)
					//modificar
					setStore({planetas:data.results})
				})
			},

			getPersonajes:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(response=>response.json())
				.then(data=> setStore({personajes:data.results}))
				
			},

			/*ElimFavor:(index) => {
				const store = getStore();
				const NuevosFavs = [...store.favorites];
				NuevosFavs.splice(index, 1);
				setStore({ favorites: NuevosFavs});
			},*/
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				/* const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				}); */

			/* 	//reset the global store
				setStore({ demo: demo }); */


			},
			testGetStore:()=>{
				console.log(getStore())
			},
			testGetActions:()=>{
				console.log(getActions())
			}
			
		}
	};
};

export default getState;
