import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
//const { useState } = require("react");

const CorporateTraineeProfile = () => {
    const [corporateTrainee, setCorporateTrainee] = useState("");

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/corporateTrainee/profile?id=${id}`)
        
        .then((res) => {
            setCorporateTrainee(res.data);
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
    }       
    fetchData();
    }, []);

    return (
      <div>
      <div className="CorporateTraineeProfile">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">User name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">First name</StyledTableCell>
                        <StyledTableCell align="center">Last name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {corporateTrainee && (
                        <TableRow>
                            <TableCell align="center">{corporateTrainee.username}</TableCell>
                            <TableCell align="center">{corporateTrainee.email}</TableCell>
                            <TableCell align="center">{corporateTrainee.firstName}</TableCell>
                            <TableCell align="center">{corporateTrainee.lastName}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        </div>

    )
}
export default CorporateTraineeProfile;