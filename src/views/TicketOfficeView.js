import { dividerClasses } from "@mui/material";

import { Button } from "@mui/material";
import ListProduct from "../components/ListProduct";

export default function TicketOfficeView() {
  return (
    <div>
      <div className="TicketOfficeTopDiv">
        <img
        className="ticketOfficeMario"
          src="https://cdn.discordapp.com/attachments/1048037393728548915/1095256414399778856/mario-background.png"
        />
        <div id="ticketOfficeTitle">
          <h2 id="ticketOfficeTitle">Choisissez votre billet</h2>
        </div>
      </div>
      <div className="eventList">
        <ListProduct />
      </div>
      <h3>Vous avez fait votre choix ?</h3>
      <Button size="small" variant="contained" color="primary">
        Voir mon panier
      </Button>
    </div>
  );
}
