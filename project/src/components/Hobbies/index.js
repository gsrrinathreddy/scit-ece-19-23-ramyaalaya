import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Hobbies(){
const [loader,setLoader] = useState(true);
    const [hobbies,setHobbies] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Hobbies')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img: 'https://files.selecthealth.cloud/api/public/content/253693-Headphones_blog_lg.jpg',
    title: 'Listening music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thumbs.dreamstime.com/z/child-sticks-hand-craftwork-unicorn-child-sticks-hand-craftwork-unicorn-unusual-gift-paper-box-master-class-handmade-favorite-131227015.jpg',
    title: 'Craft Work',
    
  },
  {
    img: 'https://thumbs.dreamstime.com/b/children-dancing-house-illustration-78525959.jpg',
    title: 'Dancing',
    
  },
  {
    img: 'https://www.honestfoodtalks.com/wp-content/uploads/2021/11/Top-cooking-channels.jpeg',
    title: 'Cooking',
    
    cols: 2,
  },
]
    
  
    
 
