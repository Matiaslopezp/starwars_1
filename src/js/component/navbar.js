import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
    <div className="p-3 mb-2 bg-dark text-white d-flex container-fluid ">
    <div>
        <img src="https://assets.adnradio.cl/2023/03/Star-Wars-pel%C3%ADculas-925x470.jpg" width={150} />
      </div>
      <div className="text-center pl-5">
      <h1>BLOG STAR WARS</h1>
      </div>
    <div className="row position-absolute top-0 end-0">
      
      <div>

        <nav className="navbar navbar-light bg-light mb-3 mt-3 mr-3">
          <div className="btn-group dropstart ">
            <button className="btn btn-outline-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ❤
            </button>

            <ul className="dropdown-menu ">
              {store.favoritos.map((value, index) => {
                return (<li key={index} className="dopdown-item"> {value}  <button onClick={() => { actions.eliminarFav(value.name);
                }}><i class="fas fa-trash-alt"></i></button></li>)
              })}
            </ul>
          </div>
        </nav>

      </div>
    </div>
    </div>
  );
};
