import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ResponsiveAppBar from "./views/ResponsiveAppBar";
import AccueilView from "./views/AccueilView";
import ProduitView from "./views/ProduitVIew";
import PrixView from "./views/PrixView";
import DispoView from "./views/DispoView";
import ProfileView from "./views/ProfileView";
import AccountView from "./views/AccountView";
import DashboardView from "./views/DashboardView";
import LogoutView from "./views/LogoutView";
import LoginView from "./views/LoginView";
import IdentView from "./views/IdentView";
import TicketOfficeView from "./views/TicketOfficeView";
import PlanView from "./views/PlanView";
import Footer from "./views/Footer";
import ExhibitorListView from "./views/ExhibitorListView";
import EventListView from "./views/EventListView";
import ModifProfilView from "./views/ModifProfilView";
import ExhibitorSpaceConnectedView from "./views/ExhibitorSpaceConnectedView";
import ExhibitorSpaceView from "./views/ExhibitorSpaceView";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from '@mui/material/styles';



const redTheme = createTheme({
  palette: {
    primary: {
      main: "#DC221E",
    },
    secondary:{
      main: "#DC221E",
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={redTheme}>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ py: 10, minHeight: 500 }} maxWidth="xl">
          <Routes>
            <Route path="/" element={<AccueilView />} />
            <Route path="/produit" element={<ProduitView />} />
            <Route path="/prix" element={<PrixView />} />
            <Route path="/dispo" element={<DispoView />} />
            <Route path="/Plan" element={<PlanView />} />

            <Route path="/ExhibitorSpace" element={<ExhibitorSpaceView />} />
            <Route path="/ExhibitorList" element={<ExhibitorListView />} />
            <Route path="/EventList" element={<EventListView />} />
            <Route path="/ident" element={<IdentView />} />
            <Route path="/profil" element={<ProfileView />} />
            <Route path="/account" element={<AccountView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/logout" element={<LogoutView />} />
            <Route path="/TicketOffice" element={<TicketOfficeView />} />
            
            <Route path="/ExhibitorSpaceConnected" element={<ExhibitorSpaceConnectedView />} />
            <Route path="/ModifProfil" element={<ModifProfilView />} />
          </Routes>
        </Container>

      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
