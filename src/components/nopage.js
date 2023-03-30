import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";



export function Nopage(){


    const history = useHistory()
    return (
        <div>
             <Container className='jusify-content-centre mt-2'>

             <h1>Hi you entered wrong place 404</h1>
<br/>
<br/>
             <Button
            onClick={()=>history.push("/")}
            variant="dark">
             Dashboard</Button>
   </Container>
           
            
            
        </div>
    )
}