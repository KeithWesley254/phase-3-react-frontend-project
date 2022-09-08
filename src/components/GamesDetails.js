import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

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

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Game Id</StyledTableCell>
            <StyledTableCell>Game Title</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            <StyledTableCell align="right">Platform</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalGames.map((game) => (
            <StyledTableRow 
            key={game.id}

            >
              <StyledTableCell align="left">{game.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {game.title}
              </StyledTableCell>
              <StyledTableCell align="right">{game.genre}</StyledTableCell>
              <StyledTableCell align="right">{game.platform}</StyledTableCell>
              <StyledTableCell align="right">{game.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GamesDetails