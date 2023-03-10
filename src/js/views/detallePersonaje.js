import React, {useState,useEffect,useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetallePersonajes=()=>{

    const { id } = useParams();
    const [personajes, setPersonajes] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setPersonajes(data.result);
          })
          .catch((error) => console.log(error));
      }, []);

      

return <>
<div className="container">
<div className="row"> 
<div className="col-5">
<img src="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg" width={500}/>

</div>
<div className="col">
    <h1>{personajes?.properties?.name}</h1>
    <p>{personajes?.description}</p>

</div>
</div>

</div>
<table>
    <tr>
        <td>height</td>
        <td>mass</td>
        <td>hair_color</td>
        <td>skin_color</td>
        <td>eye_color</td>
        <td>birth_yea</td>
        <td>gender</td>
    </tr>
    <tr>
        <td>{personajes?.properties?.height}</td>
        <td>{personajes?.properties?.mass}</td>
        <td>{personajes?.properties?.hair_color}</td>
        <td>{personajes?.properties?.skin_color}</td>
        <td>{personajes?.properties?.eye_color}</td>
        <td>{personajes?.properties?.birth_year}</td>
        <td>{personajes?.properties?.gender}</td>
    </tr>
</table>

</>


}