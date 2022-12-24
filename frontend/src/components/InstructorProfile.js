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

const InstructorProfile = () => {
    const [instructor, setInstructor] = useState("");

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/instructor/profile?id=${id}`)
        
        .then((res) => {
          setInstructor(res.data);
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
      <div className="InstructorProfile">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">User name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">First name</StyledTableCell>
                        <StyledTableCell align="center">Last name</StyledTableCell>
                        <StyledTableCell align="center">Rating</StyledTableCell>
                        <StyledTableCell align="center">Reviews</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {instructor && (
                        <TableRow>
                            <TableCell align="center">{instructor.username}</TableCell>
                            <TableCell align="center">{instructor.email}</TableCell>
                            <TableCell align="center">{instructor.firstName}</TableCell>
                            <TableCell align="center">{instructor.lastName}</TableCell>
                            <TableCell align="center">{instructor.rating}</TableCell>
                            <TableCell align="center">{instructor.reviews}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        </div>

    )
}
export default InstructorProfile;