import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box, Typography} from '@mui/material';






export default function Certifications(){
        let [loader,setLoader]= useState(true);
        let [Certifications, setCertifications]=useState(null);
      
        const getCertificationsData = async () => axios.get('http://localhost:8000/Certifications')
                                                        .then(res=>{
                                                            setCertifications(res.data)
                                                            setLoader(false)
                                                        }).Catch(err => console.log(err))
      
                useEffect(()=>{
                    getCertificationsData();
      
                },[])
            console.log("Certifications",Certifications)
        return(
            <>
            <Typography>1.Certificate of Participation for Cloud computing by ETHNUS </Typography>
            </>
        )
      }