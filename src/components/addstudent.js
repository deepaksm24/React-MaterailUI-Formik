import React, { useContext, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';

import PersonAdd from '@mui/icons-material/PersonAddAlt1';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';


function Addstudent() {

    const [state, dispatch, state1, dispatch1] = useContext(UserContext);

    const history = useHistory();


    const uservalidationschema = yup.object({
        name: yup.string().required("Enter Student name"),
        id: yup.string().required("Enter ID"),
        grade: yup.string().required("Consolidated Student grade"),
        class: yup.string().required("Enter Class section")
    });

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            id: "",
            grade: "",
            class: ""
        },
        validationSchema: uservalidationschema,
        onSubmit: (data) => {

            console.log("onsubmit trigerred",data);
            addNewUser(data) 



        }
    })








    const addNewUser = async (newu) => {



        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/students`, {
                method: 'POST',
                body: JSON.stringify(newu),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            dispatch1({ type: "add-user", payload: data })
            history.push(`/students`)


        }
        catch (error) { console.log("ERROR,error"); }
    }







    return (

        <BaseApp>
            <Container className='jusify-content-centre mt-2'>

                <h2>ADD STUDENT DETAILS</h2>
            </Container>
            <Container className='mt-5 p-2'>
                <Card >
                <div id="t-card">
                        <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined"
                            margin="dense"
                            onBlur={handleBlur}
                            label="ID"
                            variant="outlined"
                            color="secondary" focused
                            name="id"
                            value={values.id}
                            onChange={handleChange}
                        />
                        <br />
                        {errors.id && touched.id ? <p style={{ color: "red", marginBottom: "0%" }}>{errors.id}</p> : ""}
                        <TextField
                            id="outlined-basic"
                            margin="dense"
                            label="Name"
                            onBlur={handleBlur}
                            variant="outlined"
                            color="primary" focused
                            name="name"
                            value={values.name}
                            onChange={handleChange} />


                        <br />
                        {errors.name && touched.name ? <p style={{ color: "red", marginBottom: "0%" }}>{errors.name}</p> : ""}

                        <TextField
                            id="outlined-basic"
                            margin="dense"
                            label="Grade"
                            onBlur={handleBlur}
                            variant="outlined"
                            color="primary" focused
                            name="grade"
                            value={values.grade}
                            onChange={handleChange} />

                        <br />
                        {errors.grade && touched.grade ? <p style={{ color: "red", marginBottom: "0%" }}>{errors.grade}</p> : ""}

                        <TextField
                            id="outlined-basic"
                            margin="dense"
                            label="Class Section"
                            onBlur={handleBlur}
                            color="primary" focused
                            variant="outlined"
                            name="class"
                            value={values.class}
                            onChange={handleChange} />

                        <br />
                        {errors.class && touched.class ? <p style={{ color: "red", marginBottom: "0%" }}>{errors.class}</p> : ""}

                       
                        <br/>
                        <Button
                            variant="contained"
                            margin="normal"
                            color="secondary"
                            type='submit'
                            startIcon={<PersonAdd />}
                       
                        >
                            Add
                        </Button>

                        </form>
                    </div>
<br/>
                </Card>

            </Container>

        </BaseApp>
    )
}

export default Addstudent