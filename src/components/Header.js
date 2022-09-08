import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../../src/esportlogo.jpg';

const Header = () => {
  
  const navigate = useNavigate()

    return (
        <AppBar color="transparent" position="static" >
            <Container>
                <Toolbar 
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexWrap: 'inherit',
                  justifyContent: 'space-between'
                }}
                >
                    <Typography 
                    onClick={() => navigate("/")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '18px',
                      fontWeight: 700,
                      letterSpacing: '.2rem',
                      color: '#0d80fd',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                      <img src={image} alt="logo" style={{maxHeight: "40px", maxWidth: "60px", cursor: "pointer"}}/>
                        TXC Clan Esports
                    </Typography>

                    <Typography 
                    onClick={() => navigate("/games")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#989d9f',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                        Games
                    </Typography>
                    
                    <Typography 
                    onClick={() => navigate("/players")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#989d9f',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                        Players
                    </Typography>

                    <Typography 
                    onClick={() => navigate("/teams")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#989d9f',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                        Teams
                    </Typography>

                    <Typography 
                    onClick={() => navigate("/roles")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#989d9f',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                        Roles
                    </Typography>

                    <Typography 
                    onClick={() => navigate("/about")}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#989d9f',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    >
                        About Me
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header