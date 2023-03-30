import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from '../Appprovider';
import SchoolIcon from '@mui/icons-material/School';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';




const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];


export default function BaseApp({children}) {



    return (
        <div>
            <Navbar bg="dark" variant="dark">
            
                <Container>
                <SchoolIcon fontSize="large" color="secondary" sx={{ mr: 2 }}/>
                    <Navbar.Brand
                        href="/"
                    >Admin</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/teachers">Teachers</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                        <Nav.Link  href="/addteacher">Add Teacher</Nav.Link>
                        <Nav.Link href="/addstudent">Add Students</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
            <div className="children">
               

                {children}
                
               
            </div>
        </div>
    );



}
