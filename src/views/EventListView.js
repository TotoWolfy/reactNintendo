import EventCategories from "../components/EventCategories"
import EventList from "../components/EventList"
import { FormControl } from "@mui/material"
import { FormGroup } from "@mui/material"
import { useState } from "react"

export default function EventListView() {
    const [categories, setCategorie ]= useState([])
    function handler(data){
        setCategorie(data)
    }
    return (
        <div>
            <h2>Les Events</h2>
            <h4>Filtrer par categorie</h4>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <EventCategories handler={handler}/>
                </FormGroup>
            </FormControl>
            <div className="eventList">
                <EventList categorie={categories}/>
            </div>
        </div>
    )
} 