import React from 'react'
import { Container } from "@mui/system";
import { Box, Grid, Link, Typography } from '@mui/material';
import image from '../../src/esportlogo.jpg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Box 
        px={{ xs: 3, sm:10}} 
        py={{ xs: 5, sm:10}} 
        bgcolor="text.secondary" 
        color="#fff"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Navigate</Box>
                        &nbsp;
                        <Box>
                            <Link onClick={() => navigate(`/games`)} style={{cursor: 'pointer'}} color="inherit" underline='none'>Games</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link onClick={() => navigate(`/players`)} style={{cursor: 'pointer'}} color="inherit" underline='none'>Players</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link onClick={() => navigate(`/teams`)} style={{cursor: 'pointer'}} color="inherit" underline='none'>Teams</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link onClick={() => navigate(`/roles`)} style={{cursor: 'pointer'}} color="inherit" underline='none'>Gaming Roles</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link onClick={() => navigate(`/about`)} style={{cursor: 'pointer'}} color="inherit" underline='none'>Contact</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Socials</Box>
                        &nbsp;
                        <Box>
                            <Link href='https://www.instagram.com/keith_wesley_/' target="_blank" color="inherit" underline='none'><i class="fa-brands fa-instagram"></i> Instagram</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link href='https://www.youtube.com/channel/UCZ-MKtsBjTD4glktrbEYFXw' target="_blank" color="inherit" underline='none'><i class="fa-brands fa-youtube"></i> Youtube</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link href='https://twitter.com/Keith_wesley_' color="inherit" target="_blank" underline='none'><i class="fa-brands fa-twitter"></i> Twitter</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link href='https://www.linkedin.com/in/keith-wesley-707802215/' color="inherit" target="_blank" underline='none'><i class="fa-brands fa-linkedin"></i> LinkedIn</Link>
                        </Box>
                        &nbsp;
                        <Box>
                            <Link href='https://github.com/KeithWesley254' color="inherit" target="_blank" underline='none'><i class="fa-brands fa-github"></i> Github</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                        <Typography
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Montserrat',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0d80fd',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        }}
                        >
                        <img src={image} alt="logo" style={{maxHeight: "40px", maxWidth: "60px", cursor: "pointer"}}/>
                            TXC Clan Esports
                        </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                TXC Clan Esports provides fundamental information on esport
                                players, their teams and relevant gaming information. In addition
                                we have popular games in the esports scene for anyone who would like
                                to try gaming as a career
                            </Typography>
                            &nbsp;
                            <Typography>
                            © 2022 TXC Clan Esports. All Rights Reserved.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Footer