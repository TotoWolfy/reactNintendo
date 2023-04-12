import {Route, Link, Routes, useParams} from 'react-router-dom';
import { useState } from "react";

export default function EventDetailView() {
  // 👇️ get ID from URL
  const params = useParams();

const url="https://cabrol.alwaysdata.net/api/saeEvent/"+params.id;
      const [event, setEvent] = useState([]);
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
    return(
      <div>
        <img src={event.photoEv}/>
        <h1>{event.title}</h1>
        <h3>{event.description}</h3>
        <h5>catégorie : {event.catNameEv}</h5>
      </div>
    )
}