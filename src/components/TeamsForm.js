import { Box, Button, createTheme, FormControl, FormHelperText, Input, InputLabel, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Container } from '@mui/system';

const TeamsForm = ({handlePosting}) => {
    const [formData, setFormData] = useState({
        name: '',
        team_owner: '',
        founded: '',
        description: '',
        game_id: ''
    })

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://esports-api-wesley.herokuapp.com/teams`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
            name: '',
            team_owner: '',
            founded: '',
            description: '',
            game_id: ''
        })
    }

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <div>
        <Container className='formContainer'>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold", marginTop: "50px"}}
    >
        Register Team
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Team Name</InputLabel>
            <Input name="name" value={formData.name} onChange={handleChange}/>
            <FormHelperText>Please Enter Team name</FormHelperText>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Team Owner</InputLabel>
        <Input name="team_owner" value={formData.team_owner} onChange={handleChange}/>
        <FormHelperText>Enter Enter Team Owner</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Founded</InputLabel>
            <Input name="founded" value={formData.founded} onChange={handleChange}/>
            <FormHelperText>Enter Team Owner</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Description</InputLabel>
            <Input name="description" value={formData.description} onChange={handleChange}/>
            <FormHelperText>Enter A Short Description of the Team</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Game_id</InputLabel>
            <Input name="game_id" value={formData.game_id} onChange={handleChange}/>
            <FormHelperText>Please Enter A Game_id</FormHelperText>
        </FormControl>
      </div>
    </Box>
    <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='contained' type='submit' onClick={handleSubmit}>
                SUBMIT
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
    </ThemeProvider>
  )
}

export default TeamsForm