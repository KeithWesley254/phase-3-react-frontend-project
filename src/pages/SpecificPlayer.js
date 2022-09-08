import { LinearProgress, Typography, Box, Button, FormControl, FormHelperText, Input, InputLabel, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';

const SpecificPlayer = () => {

  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    role_played: '',
    team_id: '',
  })
  const [thePlayer, setThePlayer] = useState([]);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  useEffect(() => {
    fetch(`https://esports-api-wesley.herokuapp.com/players/${id}`)
    .then(r => r.json())
    .then(data => setThePlayer(data))
  }, [])

  function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
  }

  function handleUpdateTeach() {
    fetch(`https://esports-api-wesley.herokuapp.com/players/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: formData.name,
        age: formData.age,
        role_played: formData.role_played,
        team_id: formData.team_id,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => {
      setThePlayer(updatedItem)
      setFormData({
        name: '',
        age: '',
        role_played: '',
        team_id: '',
    })
    });
  }

  if (!thePlayer) return <LinearProgress style={{backgroundColor: "#0d80fd"}} />;

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
            <div>
            <Container className='formContainer'>
            <div 
            style={{ fontSize: "20px", fontWeight: "bold" }}
            >
                Edit Player Details
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Full Name</InputLabel>
                    <Input name="name" value={formData.name} onChange={handleChange}/>
                    <FormHelperText>Please Enter Full Name</FormHelperText>
                </FormControl>
            </div>
            <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel>Age</InputLabel>
                <Input name="age" value={formData.age} onChange={handleChange}/>
                <FormHelperText>Please Enter Player Age</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Role Played</InputLabel>
                    <Input name="role_played" value={formData.role_played} onChange={handleChange}/>
                    <FormHelperText>Please Enter Player Role</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>Team_id</InputLabel>
                    <Input name="team_id" value={formData.team_id} onChange={handleChange}/>
                    <FormHelperText>Please Enter Team id</FormHelperText>
                </FormControl>
            </div>
            </Box>
            <div>
            <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
                <Button variant='contained' type='submit' onClick={handleUpdateTeach}>
                    EDIT
                </Button>
            </FormControl>
          </div>
        </Container>
        </div>
        <Box>
          <div className='player-section'>
            <div className='card-container'>
              <div className='image-container'>
                <img src={thePlayer.image_url} alt='playerImage'/>
              </div>
              <div className='card-slogan'>
                <h2>What do I say?</h2>
              </div>
              <div className='card-body'>
                <p>{thePlayer.slogan}</p>
              </div>
            </div>
            <div className='player-details'>
              <Typography variant="h3" className="coinHeader">
                {thePlayer.name}
              </Typography>
              &nbsp;
              <span >
                        <Typography variant="h5" style={{fontWeight: 'bold'}}>
                            Age: {thePlayer.age}
                        </Typography>
              </span>
              &nbsp;
              <span >
                        <Typography variant="h5" style={{fontWeight: 'bold'}}>
                            Role Played: {thePlayer.role_played}
                        </Typography>
              </span>
              &nbsp;
              <span >
                        <Typography variant="h5" style={{fontWeight: 'bold'}}>
                            Team_id: {thePlayer.team_id}
                        </Typography>
              </span>
            </div>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default SpecificPlayer