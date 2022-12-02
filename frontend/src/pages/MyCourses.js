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
        const request1 = axios.get(`http://localhost:7000/api/courses/corporate/myCourses?id=${id}`)
        const request2 = axios.get(`http://localhost:7000/api/courses/individual/myCourses?id=${id}`)
        axios.all([request1,request2])
        .then(
            axios.spread((...responses) => {
              const req1 = responses[0];
              const req2 = responses[1];
        
              // use/access the results
              console.log(req1, req2);
              if(req1.data!='')
                setCourse(req1.data);
              else if(req2.data!=''){
                setCourse(req2.data);
              }

            })
          )
          .catch(errors => {
            // react on errors.
            console.error(errors);
          });
    }, []);
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Subject</StyledTableCell>
                        <StyledTableCell align="center">Total Hours</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Rating</StyledTableCell>
                        <StyledTableCell align="center">Short Summary</StyledTableCell>
                        <StyledTableCell align="center">Watch Preview Video</StyledTableCell>
                        <StyledTableCell align="center">Discount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {course && course.map( (course)=> (
                        <TableRow>
                        <TableCell align="center">{course.title}</TableCell>
                        <TableCell align="center">{course.subject}</TableCell>
                        <TableCell align="center">{course.totalhours}</TableCell>
                        <TableCell align="center">{course.price}</TableCell>
                        <TableCell align="center">{course.rating}</TableCell>
                        <TableCell align="center">{course.shortsummary}</TableCell>
                        <TableCell align="center">{<button type="button" class="button" onClick={ ()=> window.location.href=`/Video?link=${course.previewvideolink}`}> Watch </button> } </TableCell>
                        <TableCell align="center">{course.discount}</TableCell>

                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>



    )
}

export default Course;