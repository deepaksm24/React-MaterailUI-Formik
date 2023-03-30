import React, { useContext } from 'react'
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import { Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';



export default function Addteacher() {

    const [state,dispatch] = useContext(UserContext);

    const history = useHistory();

   

    const uservalidationschema = yup.object({
        name: yup.string().required("Enter Teacher name"),
        id: yup.string().required("Enter ID"),
        experience: yup.string().required("Enter Year of Experience"),
        subject: yup.string().required("Major Subject as in certificate"),
        class: yup.string().required("Enter organished Class section")
    });

    const { values, handleChange, handleSubmit,handleBlur,errors,touched } = useFormik({
        initialValues: {
            name: "",
            id: "",
            experience: "",
            subject: "",
            class: ""
        },
        validationSchema: uservalidationschema,
        onSubmit: (data) => {
            
            // console.log("onsubmit trigerred",data);
             addNewUser(data) 
        
        
        
        }
    })



    const addNewUser = async (newTeacher) => {

       


        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/Users`, {
                method: 'POST',
                body: JSON.stringify(newTeacher),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            dispatch({ type: "add-user", payload: data })
            history.push(`/teachers`)


        }
        catch (error) { console.log("ERROR,error"); }
    }




    return (
        <BaseApp>
            <Container className='jusify-content-centre mt-2'>

                <h2>ADD TEACHER DETAILS</h2>
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
                                name = "id"
                                value={values.id}
                                onChange={handleChange}
                            />

                            <br />
                            {errors.id && touched.id ? <p style={{color:"red",marginBottom:"0%"}}>{errors.id}</p> :""}
                            <TextField
                                id="outlined-basic"
                                margin="dense"
                                label="Name"
                                onBlur={handleBlur}
                                variant="outlined"
                                color="primary" focused
                                name= "name"
                                value={values.name}
                                onChange={handleChange} />

                            <br />
                            {errors.name && touched.name? <p style={{color:"red",marginBottom:"0%"}}>{errors.name}</p> :""}

                            <TextField
                                id="outlined-basic"
                                margin="dense"
                                label="Subject"
                                onBlur={handleBlur}
                                variant="outlined"
                                color="primary" focused
                                name= "subject"
                                value={values.subject}
                                onChange={handleChange} />

                            <br />
                            {errors.subject && touched.subject ? <p style={{color:"red",marginBottom:"0%"}}>{errors.subject}</p> :""}

                            <TextField
                                id="outlined-basic"
                                margin="dense"
                                label="Experience"
                                onBlur={handleBlur}
                                variant="outlined"
                                color="primary" focused
                                name= "experience"
                                value={values.experience}
                                onChange={handleChange} />



                            <br />
                            {errors.experience&& touched.experience ? <p style={{color:"red",marginBottom:"0%"}}>{errors.experience}</p> :""}

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
                            {errors.class && touched.class ? <p style={{color:"red",marginBottom:"0%"}}>{errors.class}</p> :""}

                            {/* <Button
                            className='m-3 p-2'
                            variant='success'
                            onClick={addNewUser}
                        >Add
                        </Button> */}

                            <Button
                                variant="contained"
                                margin="normal"
                                color="success"
                                type='submit'
                                startIcon={<PersonAddAlt1 />}
                            // onClick={addNewUser}
                            >
                                Add
                            </Button>
                        </form>
                    </div>

                </Card>

            </Container>
        </BaseApp>
    )

}
