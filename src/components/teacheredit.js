import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Studentdetail } from './studentdetail';
import { Student1 } from './TeacherDetails';



export default function Teacheredit() {



    const [state, dispatch] = useContext(UserContext);

    const history = useHistory();

    const { id } = useParams();

    const teacherid = id;

    const selectedUser = state.user.find((p, idx) => p.id == teacherid)



    const [name, setName] = useState(selectedUser.name);
    const [experience, setExperience] = useState(selectedUser.experience);
    const [subject, setSubject] = useState(selectedUser.subject);
    const [classn, setClassn] = useState(selectedUser.class);


    const updateUser = async (e) => {

        e.preventDefault();

        const editindex = state.user.findIndex((p, idx) => p.id == teacherid);

        

        const uppUser = {
            id,
            name,
            class: classn,
            experience,
            subject
        }

        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/Users/${id}`, {
                method: 'PUT',
                body: JSON.stringify(uppUser),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            state.user[editindex] = data;

            dispatch({ type: "edit-user" })

            history.push(`/teachers`)


        }
        catch (error) { console.log("ERROR,error"); }
    }

    return (
        <BaseApp>
            <Container className='jusify-content-centre mt-2'>

                <h2>EDIT TEACHER DETAILS</h2>
            </Container>
            <Container className='mt-5 p-2'>
                <Card>
                    <div>
                        <h1>ID: {selectedUser.id}</h1>
                        <br />

                        <br />
                        Name: <input
                            className='m-3 p-2'
                            placeholder="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <br />
                        Subject:<input
                            className='m-2 p-2'
                            placeholder="Subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                        />
                        <br />
                        Exp:<input
                            className='m-3 p-2'
                            placeholder="experience"
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                        />
                        <br />
                        Class:<input
                            className='m-3 p-2'
                            placeholder="class"
                            value={classn}
                            onChange={(event) => setClassn(event.target.value)}
                        />
                        <br />
                        <Button
                            className='m-3 p-2'
                            variant='success'
                            onClick={updateUser}
                        >Update
                        </Button>

                    </div>

                </Card>

            </Container>

        </BaseApp>
    )
}
