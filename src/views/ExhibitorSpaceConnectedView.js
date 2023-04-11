import DefaultCard from "../components/DefaultCard";

export default function ExhibitorSpaceConnectedView() {
  return (
    <div>
      <h2>Espace Exposant</h2>
    <div className="eventList">
      <div className="eventCard">
          <DefaultCard title="Modifier son Profil" href="ModifProfil" img="https://cdn.discordapp.com/attachments/1048037393728548915/1095324255815733288/modifprofil.jpg"  button="Modifier son Profil" />
            </div>
            <div className="eventCard">
          <DefaultCard title="Demander un stand"  href="AskForAStand" img="https://cdn.discordapp.com/attachments/1048037393728548915/1095325329666617384/modifstand.jpg"  button="Demander un stand" />
            </div>
            <div className="eventCard">
          <DefaultCard title="Afficher mes stands" href="MyStands" img="https://cdn.discordapp.com/attachments/1048037393728548915/1095325329666617384/modifstand.jpg"  button="Afficher mes stands" />
            </div>
            
            </div>
      </div>
  );
}
