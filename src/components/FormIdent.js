import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";


import { Link } from "react-router-dom";

export default function FormIdent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    newExhibitor(data)
  };
   const [exhibitorCategorie, setExhibitorCategorie] = useState([]);
  function whenOpen(){
    const url2 = "https://cabrol.alwaysdata.net/api/saeExhibitorCategorie"
    
        const fetchOptions = {
            method: "GET"
        };
        fetch(url2, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setExhibitorCategorie(dataJSON);
        })
        .catch((error) => console.log(error));}
const url = "https://cabrol.alwaysdata.net/api/saeExhibitor"
    function newExhibitor(data) {
        const fetchOptions = {
          headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
            method: "POST",
            body: JSON.stringify({mail: data.get("email"), password: data.get("password"), phone: data.get("phone"),catName: data.get("categorie"), firstName: data.get("firstName"), lastName: data.get("lastName"), pseudo: data.get("Pseudo"),photoExhib: data.get("photo"), description: data.get("description") })
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            })
            .catch((error) => console.log(error));
    };
    useEffect(()=> {
        whenOpen()
        }, [])
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          S'identifier
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="pseudo"
                label="Pseudo"
                name="Pseudo"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="categorie"
                select
                 SelectProps={{
            native: true,
          }}
                label="categorie"
                name="categorie"
              >
                {exhibitorCategorie.map((option) => (
            <option key={option.catName} value={option.catName}>
              {option.catName}
            </option>
          ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Mail"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmpassword"
                label="Confirmation Mot de passe"
                type="password"
                id="confirmpassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Telephone"
                type="number"
                id="phone"

              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
                label="description"
                id="description"

              />
            </Grid>
<Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="photo"
                label="photo (lien vers la photo)"
                name="photo"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Valider
          </Button>
          <Grid container justifyContent="flex-end">
            <Link to="/ExhibitorSpace">
              <Grid item>Vous avez un compte ? Connexion</Grid>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
