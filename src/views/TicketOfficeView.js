import { dividerClasses } from "@mui/material"

import { Button } from "@mui/material"
import ListProduct from "../components/ListProduct"

export default function TicketOfficeView(){
    return(
        <div>
        <h2>Choisissez votre billet</h2>
        <div className="eventList">
        <ListProduct/>
      </div>
        <h3>Vous avez fait votre choix ?</h3>
        <Button size="small" variant="contained" color="primary">
          Voir mon panier
        </Button>
        </div>
    )
}