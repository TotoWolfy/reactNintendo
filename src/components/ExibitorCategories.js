import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";

export default function ExhibitorCategories(){
    const [exhibitorCategorie, setExhibitorCategorie] = useState([]);
    const url = "https://cabrol.alwaysdata.net/api/saeExhibitorCategorie"
    function getExhibitorCategories(){
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setExhibitorCategorie(dataJSON);
        })
        .catch((error) => console.log(error));
    }
    useEffect(()=> {
        getExhibitorCategories()
        }, [])
    return(
        exhibitorCategorie.map(item =>
            <div>
            <Checkbox {...item.catName} ></Checkbox><Button>{item.catName}</Button>
            </div>)
        )
            
    
}