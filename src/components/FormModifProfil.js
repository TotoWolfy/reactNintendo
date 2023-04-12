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
import {Route, Link, Routes, useParams} from 'react-router-dom';




export default function FormIdent() {
  const [exhibitor, setExhibitor] = useState([]);
    const params = useParams(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    newExhibitor(data)
  };
   const [exhibitorCategorie, setExhibitorCategorie] = useState([]);
  function whenOpen(){
    const url="https://cabrol.alwaysdata.net/api/saeExhibitor/"+params.id;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setExhibitor(dataJSON);
        })
        .catch((error) => console.log(error));
    
    const url2 = "https://cabrol.alwaysdata.net/api/saeExhibitorCategorie"
    
        const fetchOptions2 = {
            method: "GET"
        };
        fetch(url2, fetchOptions2)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            setExhibitorCategorie(dataJSON);
        })
        .catch((error) => console.log(error));}
const url3 = "https://cabrol.alwaysdata.net/api/saeExhibitor/"+ exhibitor.idExhibitor
    function newExhibitor(data) {
        const fetchOptions = {
          headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
            method: "PUT",
            body: JSON.stringify({mail: data.get("email"), phone: data.get("phone"),catName: data.get("categorie"), firstName: data.get("firstName"), lastName: data.get("lastName"), pseudo: data.get("Pseudo"),photoExhib: data.get("photo"), description: data.get("description") })
        };
        fetch(url3, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            })
            .catch((error) => console.log(error));
    };
    function handleChange(event){
      
     const {value, id} = event.target;
         setExhibitor(prev => ({...prev, [id]: value}))
    }
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
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
             
                autoFocus
                value={exhibitor.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
               
                name="lastName"
                autoComplete="family-name"
                value={exhibitor.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="pseudo"
                
                name="Pseudo"
                value={exhibitor.pseudo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
               
                name="email"
                autoComplete="email"
                defaultValue={exhibitor.mail}
                onChange={handleChange}
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
              value={exhibitor.phone}
              onChange={handleChange}
                type="number"
                id="phone"

              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
           
                id="description"
value={exhibitor.description}
onChange={handleChange}
              />
            </Grid>
<Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="photo"
              
                name="photo"
                value={exhibitor.photoExhib}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Modifier
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
