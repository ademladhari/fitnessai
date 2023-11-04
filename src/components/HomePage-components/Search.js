import React, { useContext, useEffect, useRef, useState } from 'react'
import {exerciseOptions,fetchData} from '../../util/fetchData'
import Bodyparts from './Bodyparts'
import { Box } from '@mui/material'
import BodyPartContext from '../../util/context'
export default function Search({bodyPart,setBodyPart}) {
  const [searchValue,setSearchvalue]=useState('')
  const { setExercises } = useContext(BodyPartContext);
   const searchResultsRef = useRef(null)
    const [bodyParts, setBodyParts] = useState([])
    useEffect(() => {
      const fetchExerciceData=async()=>
      {
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
     setBodyParts(['all',...bodyPartsData])
    
      }
      fetchExerciceData()
      }
    , [])
    
    const handleSubmit=async(e)=>{ 
        e.preventDefault()
        if (searchValue) {
          const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
         
          const searchRegex = new RegExp(searchValue, 'i'); 
          const searchedExercice = exercicesData.filter((exercice) => {
            const exercicematch = searchRegex.test(exercice.equipment)
            const namematch = searchRegex.test(exercice.name)
            const targetematch = searchRegex.test(exercice.target)
            const bodyPartmatch = searchRegex.test(exercice.bodyPart)
            return exercicematch || namematch||targetematch||bodyPartmatch
          });     
          setSearchvalue("")
          setExercises(searchedExercice)
          if (searchedExercice.length > 0 && searchResultsRef.current) {
            searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}

  return (
  
    <div className=''>
        <div className=" relative h-96 bg-gradient-to-b from-[#5a5959] to-[#F3F4F6]   to-70%  flex flex-col justify-center   ">
  <div className="relative xl:px-12 px-3 w-full  sm:max-w-2xl sm:mx-auto pt-52 pb-14 ">
    <div className=' bg-[#6a6969] rounded-full' >
    <div className="overflow-hidden z-0 rounded-full relative p-3 ">
      <form  className="relative flex  z-50 bg-white rounded-full">
        <input value={searchValue}
         onChange={(e)=>setSearchvalue(e.target.value)}
        type="text" placeholder="" className="rounded-full flex-1 xl:px-6 py-4 text-gray-700 focus:outline-none"></input>
        <button onClick={handleSubmit} className="bg-[#333] text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
      </form>
  
      </div>
    </div>
    
  </div>

<Box className="" sx={{width:'100%' }
}>
  <Bodyparts  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
  <div ref={searchResultsRef}></div>
</Box>
</div>
</div>

  )
}
