import React from 'react'
import { Container } from "@mui/system";
import { Box, Grid, Link, Typography } from '@mui/material';
import image from '../../src/esportlogo.jpg';

const Footer = () => {
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
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href='/about' color="inherit" underline='none'>About me</Link>
                        </Box>
                        <Box>
                            <Link href='/about' color="inherit" underline='none'>Contact</Link>
                        </Box>
                        <Box>
                            <Link href='/roles' color="inherit" underline='none'>Gaming Roles</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Socials</Box>
                        <Box>
                            <Link href='https://www.instagram.com/keith_wesley_/' target="_blank" color="inherit" underline='none'>Instagram</Link>
                        </Box>
                        <Box>
                            <Link href='https://www.youtube.com/channel/UCZ-MKtsBjTD4glktrbEYFXw' target="_blank" color="inherit" underline='none'>Youtube</Link>
                        </Box>
                        <Box>
                            <Link href='https://twitter.com/Keith_wesley_' color="inherit" target="_blank" underline='none'>Twitter</Link>
                        </Box>
                        <Box>
                            <Link href='https://www.linkedin.com/in/keith-wesley-707802215/' color="inherit" target="_blank" underline='none'>LinkedIn</Link>
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