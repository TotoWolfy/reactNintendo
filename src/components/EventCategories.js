import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function EventCategories(props) {
    const [eventCategorie, setEventCategorie] = useState([]);
    const listCategorie = []
    const url = "https://cabrol.alwaysdata.net/api/saeEventCategorie"
    function getEventCategories() {
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setEventCategorie(dataJSON);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getEventCategories()
    }, [])
    function bonjour(event) {
        if(event.target.checked){
            listCategorie.push(event.target.defaultValue)
        }
        else{
            var index = listCategorie.indexOf(event.target.defaultValue);
    if (index !== -1) {
        listCategorie.splice(index, 1);
    }
        }
        props.handler(listCategorie)
    }
    return (
        eventCategorie.map(item =>
            <FormControlLabel
                value={item.catNameEv}
                control={<Checkbox onChange={bonjour}/>}
                label={item.catNameEv}
                labelPlacement="top"
                
            />
        )
    )


}