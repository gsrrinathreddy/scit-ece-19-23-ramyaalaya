import { Typography } from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';

export default function Aboutus(){
    let [loader,setLoader]= useState(true);
  let [Aboutus, setAboutus]=useState(null);

  const getAboutusData = async () => axios.get('http://localhost:8000/Aboutus')
                                                  .then(res=>{
                                                      setAboutus(res.data)
                                                      setLoader(false)
                                                  }).Catch(err => console.log(err))

          useEffect(()=>{
              getAboutusData();

          },[])
      console.log("Aboutus",Aboutus)

    return(
        <>
<Typography>Name: RAMYA ARE</Typography>
<Typography>Father Name:MALLESHAM ARE </Typography>
<Typography>Mother Name: LAVANYA ARE</Typography>
<Typography>Email: ramyaalaya62@gmail.com</Typography>
<Typography>Phone No.: 9912583463</Typography>
        </>
        
    )
    }
