import { Box, Stack, Typography, Pagination } from '@mui/material';
import React, { useContext, useState } from 'react';
import BodyPartContext from '../../util/context';
import ExerciseCard from './ExerciseCard';
import { useEffect } from 'react';
import { exerciseOptions, fetchData } from '../../util/fetchData';

function Exercices() {
  const { exercises, bodyPart, setExercises } = useContext(BodyPartContext);
  
  // start of pagination part
  const exercisesPerPage = 9; // Number of exercises to display per page
  const [currentPage, setCurrentPage] = useState(1); // Note: Material-UI Pagination starts from 1
  const indexofLastExercise = currentPage * exercisesPerPage;
  const indexofFirstExercise = indexofLastExercise - exercisesPerPage;
  let currentExercises = exercises.slice(indexofFirstExercise, indexofLastExercise);

  const paginate = (e, value) => {  //e needs to be there bc of material ui doing behind the scene work
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  //end of pagination part
  useEffect(() => {
    const fetchExerciceData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
      setCurrentPage(1);
    };
    
    fetchExerciceData();
  }, [bodyPart, setExercises]);

  return (
    <Box className="bg-[#F3F4F6]" id="exercises" pt="100px" align="center" >
      <Typography variant="h2" align="center" paddingBottom="40px" paddingTop="110px">
        Results
      </Typography>
      <Stack
      display='flex'
        direction="row"
        gap={{ lg: 2, xs: 1 }}
        width="90%"
        flexWrap="wrap"
        justifyContent="center"
      
      >
       {currentExercises.map((exercise, index) => (
         <ExerciseCard isbodyparts={true} exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack pb="50px" pt="50px"  alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="circular"
            className="rounded-2xl"
            defaultPage={5}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercices;
