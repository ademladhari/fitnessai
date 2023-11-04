import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Bodyparts from '../HomePage-components/Bodyparts'

function SimilarExercises({targetMuscleExercises}) {
  return (
    <Box sx={{mt:{lg:'50px',xs:'0'}}} className='w-[100%] ' >
      <Typography className=' text-center'variant='h3'>Exercises that target the same muscle group </Typography>
<Stack direction='Row' sx={{position:'relative'}} >
 {targetMuscleExercises.length && <Bodyparts data={targetMuscleExercises} />}
</Stack>

   
    </Box>
  )
}

export default SimilarExercises