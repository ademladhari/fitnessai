import { Box } from '@mui/material'
import React from 'react'
import Details from '../components/ExercisesPage-components/Details'
import SimlarExercises from '../components/ExercisesPage-components/SimilarExercises'
import ExercisesVideos from '../components/ExercisesPage-components/ExercisesVideos'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { exerciseOptions, fetchData ,youtubeOptions} from '../util/fetchData'

function Exercicespage() {

  
      const [exerciseVideo, setexerciseVideo] = useState([])
      const [exerciseDetail,setExerciseDetail]=useState({})
      const [targetMuscleExercises,setTargetMuscleExercises]=useState([])
      const [equipmentExercises,setEquipmentExercises]=useState([])
      const {id}=useParams();
        useEffect(()=>{
       const fetchExercisesData= async()=>{
        const exerciseDbUrl ='https://exercisedb.p.rapidapi.com'
        const youtubesearchUrl='https://youtube-search-and-download.p.rapidapi.com'
        const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
         setExerciseDetail(exerciseDetailData)
       
         
       const exerciseVideosData= await fetchData (`${youtubesearchUrl}/search?query=${exerciseDetailData.name} gym exercise`,youtubeOptions)
       setexerciseVideo(exerciseVideosData.contents) 
       const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
       setTargetMuscleExercises(targetMuscleExercisesData)
       const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)  
      setEquipmentExercises(equipmentExercisesData)
      }
       
     
       fetchExercisesData();
        },[id])

    
  return (
    <Box className='bg-[#F3F4F6] h-screen ' >
        
        <Details exerciseDetail={exerciseDetail}/>
        <ExercisesVideos exerciseVideo={exerciseVideo}name={exerciseDetail.name}/>
        <SimlarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}
         />
    </Box>
  )
}

export default Exercicespage