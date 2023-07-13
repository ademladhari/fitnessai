import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Bodyparts from '../HomePage-components/Bodyparts'

function SimilarExercises({equipmentExercises,targetMuscleExercises}) {
  return (
    <Box sx={{mt:{lg:'70px',xs:'0'}}}>
      <Typography className=' text-center'variant='h3'>Exercises that target the same muscle group </Typography>
<Stack direction='Row' sx={{p:'2',position:'relative'}} >
 {targetMuscleExercises.length && <Bodyparts data={targetMuscleExercises} />}
</Stack>

   
    </Box>
  )
}

export default SimilarExercises