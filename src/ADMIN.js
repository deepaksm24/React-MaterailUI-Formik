import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import BaseApp from "./components/base";
import Image from "react-bootstrap/Image";
import LinearProgress from '@mui/material/LinearProgress';




  
export function Admin() {

  

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)


    return (
        <BaseApp>
        <div>
       
     
    
            <Container className='jusify-content-centre mt-2'>

                <h1>Welcome</h1>

                {isLoading ?
            <LinearProgress color="secondary" />:


                <Image className='img-fluid shadow-4 jusify-content-centre mt-6 p-2'
        src=
"https://t4.ftcdn.net/jpg/02/89/52/37/360_F_289523749_Asn8QNQFMvWXvYdOzobJpHAobslhUqhU.jpg"
        roundedCircle responsive
      />
                }
            </Container>



        </div>
        </BaseApp>
    )
}