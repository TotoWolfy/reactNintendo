import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import DefaultCard from "./DefaultCard";


export default function ExhibitorList(){
    const button = "En savoir plus"
    const [exhibitor, setExhibitor] = useState([]);
    const url="https://cabrol.alwaysdata.net/api/saeExhibitor";
    function getExhibitor(){
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
        .catch((error) => console.log(error));
    }
    useEffect(()=> {
        getExhibitor()
        }, [])
    return(
        
        exhibitor.map(item =>
            <div className="ExhibitorCard">
          <DefaultCard title={item.pseudo} href={"Exhibitor/"+item.idExhibitor} img={item.photoExhib} description={item.description} description2={item.catName}  button={button} />
            </div>)
        )

}