import * as React from 'react';
import { TablePagination, Box, Button } from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const TeamDetails = ({allTeams, deleteTeam}) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const navigate = useNavigate();
      
    const handleChangePage = (e, newPage ) => {
        setPage(newPage);
    };
      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Team Id</StyledTableCell>
            <StyledTableCell>Team Name</StyledTableCell>
            <StyledTableCell align="center">Team Owner</StyledTableCell>
            <StyledTableCell align="center">Year Founded</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Excommunicado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTeams
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((team) => (
            <TableRow 
            key={team.id}
            >
              <StyledTableCell align="left">{team.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="left">
                {team.name}
              </StyledTableCell>
              <StyledTableCell align="center">{team.team_owner}</StyledTableCell>
              <StyledTableCell align="center">{team.founded}</StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                onClick={() => navigate(`/teams/${team.id}`)}
              >
                <Button 
                variant="contained" 
                
                >
                  EDIT
                </Button>
              </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  deleteTeam(team.id);
                }}
                >
                  Delete
                </Button>
              </Box>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allTeams.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </ThemeProvider>
  )
}

export default TeamDetails