
import Card1 from '../../components/Card1'
import { Grid } from '@mui/material';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';
import Card5 from '../../components/Card5';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';


export default function Skills(){
  let [loader,setLoader]= useState(true);
        let [Skills, setSkills]=useState(null);
        const getSkillsData = async () => axios.get('http://localhost:8000/Skills')
                                                        .then(res=>{
                                                            setSkills(res.data)
                                                            setLoader(false)
                                                        }).Catch(err => console.log(err))
      
                useEffect(()=>{
                    getSkillsData();
      
                },[])
            console.log("Skills",Skills)
  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      </Grid>
    </>
  )
}