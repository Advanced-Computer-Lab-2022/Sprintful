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

const Course = () => {
    const [course, setCourse] = useState("");

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses?id=${id}`)

            .then((res) => {
                setCourse(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Summary</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {course && (


                        <TableRow>
                            <TableCell align="center">{course.title}</TableCell>
                            <TableCell align="center">{course.shortsummary}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>



    )
}

export default Course;


