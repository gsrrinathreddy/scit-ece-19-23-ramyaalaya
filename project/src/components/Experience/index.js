
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Experience(){
const [loader,setLoader] = useState(true);
    const [experience,setExperience] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Experience')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setExperience(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return(
      <>
      fresher
      </>
  )
}