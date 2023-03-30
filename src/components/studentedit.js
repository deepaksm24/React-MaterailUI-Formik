import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Studentdetail } from './studentdetail';







export default function Studentedit() {



    const [state, dispatch,state1,dispatch1] = useContext(UserContext);

    const history = useHistory();

    const { id } = useParams();

  
    const teacherid = id;

    const selectedUser = state1.user.find((p, idx) => p.id == teacherid)


    const [name, setName] = useState(selectedUser.name);
    const [grade, setGrade] = useState(selectedUser.Grade);
    const [classn, setClassn] = useState(selectedUser.class);




    const updateUser = async (e) => {

        e.preventDefault();

        const editindex = state.user.findIndex((p, idx) => p.id == teacherid);

        const uppUser = {
            id,
            name,
            class: classn,
            Grade: grade
        }
        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/students/${id}`, {
                method: 'PUT',
                body: JSON.stringify(uppUser),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            state1.user[editindex] = data;

            dispatch1({ type: "edit-user" })

            history.push(`/students`)


        }
        catch (error) { console.log("ERROR,error"); }
    }
    

    return (
        <BaseApp>
<Container className='jusify-content-centre mt-2'>

<h2>Edit Student Details</h2>
   </Container>
            <Container className='mt-5 p-2'>
                <Card>
                    <div>
                        <h1>ID: {selectedUser.id}</h1>
                        <br />
                        Name: <input
                            className='m-3 p-2'
                            placeholder={name}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <br />
                        Grade: <input
                            className='m-3 p-2'
                            placeholder={grade}
                            value={grade}
                            onChange={(event) => setGrade(event.target.value)}
                        />
                        <br />
                        Class: <input
                            className='m-3 p-2'
                            placeholder={classn}
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
