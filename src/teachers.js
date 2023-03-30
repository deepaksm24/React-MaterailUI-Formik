import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from "react";

import AppProvider, { UserContext } from './Appprovider';
import BaseApp from './components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import Badge from '@mui/material/Badge';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CircularProgress from '@mui/material/CircularProgress';



export default function Teachers() {
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true)

    const [state, dispatch] = useContext(UserContext);

    setTimeout(() => {
        setIsLoading(false)
    }, 1200)

    const tno = state.user.length;
    const deleteUser = async (idx) => {


        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/Users/${idx}`, {
                method: 'Delete',
            });
            const data = await response.json();

            const alterList = state.user.filter((per) => per.id !== idx);
            dispatch({ type: "delete-user", payload: alterList })

        }
        catch (error) { console.log("ERROR,error"); }
    }


    return (
        <BaseApp>
            <Container className='jusify-content-centre mt-2'>

           
                <h2>ALL TEACHER DETAILS
                    {" "}
                    <Badge badgeContent={tno} color="primary">
                        <AccountBoxIcon fontSize="large" />
                    </Badge>
                </h2>
            
            </Container>

            {isLoading ?
            <CircularProgress color="secondary" />:

            <Container fluid id="teachercontainer">
                <Row className="justify-content-center">

                    {state.user.map((user, index) => (
                        <Col lg={6} sm={12} md={6}>
                            <Card id="card" >
                                <Card.Header><h1>Teacher : {user.name}</h1></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <h4>Subject: {user.subject}</h4>
                                        <h5>Class: {user.class}</h5>
                                        <h6>Experience: {user.experience}</h6>

                                    </Card.Text>
                                    <Button
                                        className=""
                                        variant='info'
                                        onClick={() => history.push(`/editteacher/${user.id}`)}
                                    >Edit</Button>
                                    <Button
                                        className="m-2"
                                        variant='secondary'
                                        onClick={() => history.push(`/teacher/${user.id}`)}
                                    >View</Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteUser(user.id)}
                                    >Delete</Button>
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
