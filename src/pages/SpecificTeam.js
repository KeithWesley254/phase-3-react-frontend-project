import { LinearProgress, Typography, Box, Button, FormControl, FormHelperText, Input, InputLabel, createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';

const SpecificTeam = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        team_owner: '',
        description: '',
        game_id: ''
    })
    const [theTeam, setTheTeam] = useState([]);
    const darkTheme = createTheme({
        palette: {
        mode: 'dark',
        },
    })

    console.log(theTeam)

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        fetch(`https://esports-api-wesley.herokuapp.com/teams/${id}`)
        .then(r => r.json())
        .then(data => setTheTeam(data))
    }, [])

    function handleUpdatePlayer() {
        fetch(`https://esports-api-wesley.herokuapp.com/teams/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.name,
            team_owner: formData.team_owner,
            description: formData.description,
            game_id: formData.game_id
        }),
    })
    .then((r) => r.json())
    .then((updatedItem) => {
        setTheTeam(updatedItem)
        setFormData({
            name: '',
            team_owner: '',
            description: '',
            game_id: ''
        })
    });
    }

    if (!theTeam) return <LinearProgress style={{backgroundColor: "#0d80fd"}} />;

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
            <div>
            <Container className='formContainer'>
            <div 
            style={{ fontSize: "20px", fontWeight: "bold" }}
            >
                Edit Team Details
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Team Name</InputLabel>
                    <Input name="name" value={formData.name} onChange={handleChange}/>
                    <FormHelperText>Please Enter Team Name</FormHelperText>
                </FormControl>
            </div>
            <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel>Team Owner</InputLabel>
                <Input name="team_owner" value={formData.team_owner} onChange={handleChange}/>
                <FormHelperText>Please Enter Owner Name</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Description</InputLabel>
                    <Input name="description" value={formData.description} onChange={handleChange}/>
                    <FormHelperText>Please Enter Team Description</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Game_id</InputLabel>
                    <Input name="game_id" value={formData.game_id} onChange={handleChange}/>
                    <FormHelperText>Please Enter Game id</FormHelperText>
                </FormControl>
            </div>
            </Box>
            <div>
            <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
                <Button variant='contained' type='submit' onClick={handleUpdatePlayer}>
                    EDIT
                </Button>
            </FormControl>
          </div>
        </Container>
        </div>
            <section key={theTeam.id} className="amTheCaptainNow">
            <div className="myStory">
            <h2 className="gaming-title">{theTeam.name}</h2>
                <div className="aboutText">
                    <h5>Team name: {theTeam.name}</h5>
                    <h5>Team owner: {theTeam.team_owner}</h5>
                    <h5>Founded: {theTeam.founded}</h5>
                    <h5>Game_id: {theTeam.game_id}</h5>
                    <h5>Description:</h5>
                    <p>{theTeam.description} </p>
                </div>
            </div>
            </section>
      </div>
    </ThemeProvider>
  )
}

export default SpecificTeam