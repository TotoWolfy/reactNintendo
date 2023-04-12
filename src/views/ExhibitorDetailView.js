import {Route, Link, Routes, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function ExhibitorDetailView() {
  // 👇️ get ID from URL
  const params = useParams();
      const [exhibitor, setExhibitor] = useState([]);
function WhenOpen(){
const url="https://cabrol.alwaysdata.net/api/saeExhibitor/"+params.id;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setExhibitor(dataJSON);
        })
        .catch((error) => console.log(error));}
         useEffect(()=> {
        WhenOpen()
        }, [])
        function suppExhib(){
          const url = "https://cabrol.alwaysdata.net/api/saeExhibitor/"+ exhibitor.idExhibitor
        const fetchOptions = {
            method: "DELETE",
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            })
            .catch((error) => console.log(error));
    
        }
    return(
      <div>
        <img src={exhibitor.photoExhib}/>
        <h1>{exhibitor.pseudo}</h1>
        <h3>{exhibitor.firstName} {exhibitor.lastName}</h3>
        <h5>catégorie : {exhibitor.catName}</h5>
        <Button onClick={suppExhib} size="small" variant="contained" color="warning">
          Supprimer
        </Button>
        <a href={"ModifProfil/"+exhibitor.idExhibitor}>
        <Button size="small" variant="contained" color="primary">
          Modifier
        </Button>
        </a>
      </div>
    )
}