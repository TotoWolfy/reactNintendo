import ExhibitorCategories from "../components/ExibitorCategories"
import ExhibitorList from "../components/ExhibitorList"


export default function ExhibitorListView(){
    return(
        <div>
            <h2>Les Exposants</h2>
            <h4>Filtrer par categorie</h4>
            <ExhibitorCategories/>
            <div className="eventList">
                <ExhibitorList/>
            </div>
        </div>
    )
}