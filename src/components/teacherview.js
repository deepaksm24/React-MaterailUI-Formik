import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import BaseApp from '../components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Studentdetail } from './studentdetail';
import { Student1 } from './TeacherDetails';
import { UserContext } from '../Appprovider';


function Teacherview() {

    const [state] = useContext(UserContext);

    const { id } = useParams();

    const teacherid = id;

    const s = state.user.find((p, idx) => p.id == teacherid)


    return (

        <BaseApp>

            <Container id="teachercontainer">
                <Row className="justify-content-center mt-5 p-3">


                    <Col>
                        <Card id="card" >
                            <Card.Header><h1>Teacher Name: {s.name}</h1></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <h4>ID: {s.id}</h4>
                                    <h4>Class: {s.class}</h4>
                                    <h4>Subject: {s.subject}</h4>
                                    <h5>Class: {s.experience}</h5>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>




                </Row>



            </Container>


        </BaseApp>



    )
}

export default Teacherview