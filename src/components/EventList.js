import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import DefaultCard from "./DefaultCard";

export default function EventList(){
    const button = "En savoir plus"
    const [event, setEvent] = useState([]);
    const url="https://cabrol.alwaysdata.net/api/saeEvent";
    function getEvent(){
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setEvent(dataJSON);
        })
        .catch((error) => console.log(error));
    }
    useEffect(()=> {
        getEvent()
        }, [])
    return(
        
        event.map(item =>
            <div className="eventCard">
          <DefaultCard title={item.title} description={item.catNameEv}  button={button} img={item.photoEv} />
            </div>)
        )

}