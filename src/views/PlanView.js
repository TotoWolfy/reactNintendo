import { Button } from "@mui/material"
import plan from "../img/plan.jpg"
import { CardMedia } from "@mui/material"

export default function PlanView(){
    return(
        <div>
            <div className="buttonInPlan">
        <Button size="small" variant="contained" color="primary" href="/">
          Retour à l'accueil
        </Button>
            </div>
            <CardMedia
          component="img"
          image={plan}
          alt="green iguana"
        />
        </div>
    )
}