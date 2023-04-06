import Container from "@mui/material/Container";
import banner from "../img/banner.jpg"
import DefaultCard from "../components/DefaultCard";
import plan from "../img/plan.jpg"
import logoHeader from "../img/logoHeader.png"
import TicketOfficeLogo from "../img/TicketOfficeLogo.jpg"

export default function AccueilView() {
  const button = "voir"
  return (
    <div>
      <img className="banner" src={banner} ></img>
      <h1>Nintendo France Fest</h1>
      <div className="HomeCard">
      <DefaultCard title={"Le Plan de la convention"} img={plan} href={"/Plan"} button={button} />
      <DefaultCard title={"Achetez votre billet dès maintenant"} img={TicketOfficeLogo} href={"/TicketOffice"} button={button} />
      </div>
    </div>
  );
}
