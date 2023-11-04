import React, { useEffect } from 'react'
import  BodyPartImage from '../../assets/icons/body-part.png'
import  TargetImage from '../../assets/icons/target.png'
import  EquipmentImage from '../../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material';
import { UserAuth } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
import OpenAICompletion from '../../util/chatgpt';
 
function Details({exerciseDetail}) {
  const [userData,setUserData]=useState({})
  const {user}=UserAuth()
 
  const accessVariables = async () => {
    try {
    const userRef = doc(db, 'data', user.email); 
   
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    setUserData(userData)
   }
   catch(error){
    console.log(error)
   }
  }
  useEffect(() => {
    accessVariables();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
const {bodyPart,gifUrl,name,target,equipment}= exerciseDetail;
const extraDetail =[
  {      icon : BodyPartImage,
         name : bodyPart},
{        icon :TargetImage,
         name : target}
,   {   icon :EquipmentImage
    ,    name:equipment
     }
]

  return (

    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center', paddingTop:'120px', paddingRight:"30%", marginLeft:'3%',width:"100%" }} >
      <img src={gifUrl} alt={name} loading='lazy' className=' ml-[20%] sm:w-[600px]  h-[300px] sm:h-[600px] rounded-2xl'></img>
      
      <Stack sx={{gap :{lg:'5px',xs:'20px'}} } className=" ml-3">
        <Typography variant='h4'>
          {name}
        </Typography>
        <Typography variant="h6"  paddingTop="15px" paddingBottom="20px">
      
        <OpenAICompletion exercise={name} userData={userData}/>
        
        </Typography >
        { extraDetail.map((item)=>(
          <Stack key={item.name} direction="row" gap="15px" alignItems="center">
            <Button
             sx={{
              '&:hover': {
                background: '#dedcdc',
                borderRadius:'10px',
                
              },
             }}
             >
              <img className='flex bg-[#dedcdc] p-2 rounded-lg' alt='img' src={item.icon}></img>
            </Button>
            <Typography variant='h6' className=' font-bold capitalize' >
              {item.name}
              
              
            </Typography>
          </Stack>
        ))}
      </Stack>
      
    </Stack>
  )
}

export default Details