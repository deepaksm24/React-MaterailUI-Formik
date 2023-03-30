import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from "react";

import BaseApp from '../components/base';
import { Button as Button1, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../Appprovider';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LinearProgress from '@mui/material/LinearProgress';


export default function Students() {

    const history = useHistory();

    const [state, dispatch, state1, dispatch1] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 1400)
    const studentno = state1.user.length;

    const deleteUser = async (idx) => {

        try {

            const response = await axios.delete(`https://64100384864814e5b644bb1b.mockapi.io/students/${idx}`)
            const data = response.data;

            console.log("AfterDelete", data);

            const alterList = state1.user.filter((per) => per.id !== idx);
            dispatch1({ type: "delete-user", payload: alterList })

        }
        catch (error) { console.log("ERROR,error"); }
    }

    


    return (
        <BaseApp>



            <Container className='jusify-content-centre mt-2'>
                <h2>All Student DETAILS
                    {" "}
                    <Badge badgeContent={studentno} color="primary">
                        <AccountBoxIcon fontSize="large" color="success" />
                    </Badge>


                </h2>
            </Container>



            {isLoading ?
            <LinearProgress color="secondary" />:


            <Container fluid id="teachercontainer">
                <Row className="justify-content-center">

                    {state1.user.map((student, index) => (
                        <Col lg={6} sm={12} md={6}>
                            <Card id="card" >
                                <Card.Header><h1>Student Name: {student.name}</h1></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <h4>Class: {student.class}</h4>
                                        <h5>Grade: {student.Grade}</h5>
                                    </Card.Text>
                                    <Button1
                                        className=""
                                        variant='info'
                                        onClick={() => history.push(`/editstudent/${student.id}`)}
                                    >Edit</Button1>
                                    <Button1
                                        className="m-2"
                                        variant='secondary'
                                        onClick={() => history.push(`/student/${student.id}`)}
                                    >View</Button1>


                                    {/*                                 
                                <Button
                                variant="danger"
                                onClick={()=>deleteUser(student.id)}
                                >Delete</Button> */}

                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteUser(student.id)}

                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}



                </Row>



            </Container>


                            }

        </BaseApp>

    );



}
