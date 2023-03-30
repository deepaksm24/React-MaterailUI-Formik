import { Children, createContext, useContext, useEffect, useReducer, useState } from "react";
import BaseApp from "./components/base";
import { Studentdetail } from "./components/studentdetail";
import { Student1 } from "./components/TeacherDetails";
import reducer1 from "./Redducer1";
import reducer from "./Reducer";
import Teachers from "./teachers";
import axios from 'axios';

export const UserContext = createContext();


export default function AppProvider({ children }) {

    const initialState = { user: [] };
    const initialState1 = { user: [] };  // for student

  

    const [state, dispatch] = useReducer(reducer, initialState);
    const [state1, dispatch1] = useReducer(reducer1, initialState1);   // for student


    useEffect(() => {

        const getDetails = async () => {

            try {
                const response = await fetch("https://64100384864814e5b644bb1b.mockapi.io/Users", {
                    method: 'GET',
                });
                const data = await response.json();

                dispatch({type:"get-api" , payload:data})
            
            }
            catch (error) {

                console.log("ERROR,error");
            }
        }

        const getDetails1 = async () => {  // for student

            axios.get('https://64100384864814e5b644bb1b.mockapi.io/students')
            .then(response => {
                const data = response.data;
                
                dispatch1({type:"get-api" , payload:data})
                

            })
            .catch(err => {
               
                console.error(err);
            });
          
        }


        getDetails();
        getDetails1();  // for student
    }, [])

    

    return (

        <UserContext.Provider
            value={[state, dispatch, state1,dispatch1]}>

            {children}

        </UserContext.Provider>

    );
}

