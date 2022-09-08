import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GamesDetails({totalGames}){

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));


    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Game Id</StyledTableCell>
            <StyledTableCell>Game Title</StyledTableCell>
            <StyledTableCell align="center">Genre</StyledTableCell>
            <StyledTableCell align="center">Platform</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalGames.map((game) => (
            <TableRow 
            key={game.id}

            >
              <StyledTableCell align="left">{game.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {game.title}
              </StyledTableCell>
              <StyledTableCell align="center">{game.genre}</StyledTableCell>
              <StyledTableCell align="center">{game.platform}</StyledTableCell>
              <StyledTableCell align="center">{game.description}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}

export default GamesDetails