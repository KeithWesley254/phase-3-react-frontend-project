import { Box, Button, createTheme, FormControl, FormHelperText, Input, InputLabel, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Container } from '@mui/system';

const PlayersForm = ({handlePosting}) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        slogan: '',
        role_played: '',
        image_url: '',
        team_id: ''
    })

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://esports-api-wesley.herokuapp.com/players`,{
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
            age: '',
            slogan: '',
            role_played: '',
            image_url: '',
            team_id: ''
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
    style={{ fontSize: "20px", fontWeight: "bold", marginTop: "50px" }}
    >
        Register Player
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Player Name</InputLabel>
            <Input name="name" value={formData.name} onChange={handleChange}/>
            <FormHelperText>Please Enter Player Name</FormHelperText>
        </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Age</InputLabel>
        <Input name="age" value={formData.age} onChange={handleChange}/>
        <FormHelperText>Enter Enter Player's Age</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Slogan</InputLabel>
            <Input name="slogan" value={formData.slogan} onChange={handleChange}/>
            <FormHelperText>Enter Player Slogan</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Role Played</InputLabel>
            <Input name="role_played" value={formData.role_played} onChange={handleChange}/>
            <FormHelperText>Enter Player Role</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Image_url</InputLabel>
            <Input name="image_url" value={formData.image_url} onChange={handleChange}/>
            <FormHelperText>Enter an Image_url</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Team_id</InputLabel>
            <Input name="team_id" value={formData.team_id} onChange={handleChange}/>
            <FormHelperText>Please Enter A Team_id</FormHelperText>
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

export default PlayersForm