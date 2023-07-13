import {  useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

function extractFirstFrameFromGif(gifUrl) {

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';

    image.onload = function () {
      const width = image.width;
      const height = image.height;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);

      const dataUrl = canvas.toDataURL('image/png');
      resolve(dataUrl);
    };

    image.onerror = function () {
      reject(new Error('Failed to load GIF'));
    };

    image.src = gifUrl;
  });
}

function ExerciseCard({ exercise }) {
 

  const [hovered, setHovered] = useState(false);
  const [dataUrl, setDataUrl] = useState('');


  useEffect(() => {
    const gifUrl = exercise.gifUrl;
    extractFirstFrameFromGif(gifUrl)
      .then((dataUrl) => {
        setDataUrl(dataUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [exercise.gifUrl]);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <>
        <Link
      className={`exercise-card w-1/4 bg-white rounded-2xl noscroll`}
      to={`/exercise/${exercise.id}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ overflow: 'hidden' }}
    >
      {hovered ? (
        <img
          className={`w-11/12 h-[400px] rounded-2xl`}
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{ overflow: 'hidden' }}
        />
      ) : (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
          {dataUrl ? (
            <img
              className="w-11/12 h-[400px] rounded-2xl"
              src={dataUrl}
              alt={exercise.name}
              loading="lazy"
              style={{ overflow: 'hidden' }}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="400px"
              animation="wave"
        
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          )}
        </div>
      )}
    
   
        <div className='flex  start-1'>
        <Button
          sx={{
            marginTop: '10px',
            marginLeft:'20px',
            paddingY: '0',
            paddingX: '8px',
            color: '#ffffff',
            background: '#9EABCE',
            fontSize: '20px',
            borderRadius: '20px',
            textTransform: 'lowercase',
            '&:hover': {
              background: '#FF0050',
            },
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            marginTop: '10px',
            paddingY: '0',
            marginLeft:'8px',
            paddingX: '8px',
          
            color: '#ffffff',
            background: '#9EABCE',
            fontSize: '20px',
            borderRadius: '20px',
            textTransform: 'lowercase',
            '&:hover': {
              background: '#FF0050',
            },
          }}
        >
          {exercise.target}
        </Button>
        </div>
        <Typography
        className=' overflow-hidden '
          textAlign="center"         
          marginTop="12px"
          marginBottom="17px"
          fontSize="1.3em"
          color="000"
          width="100%"
          fontWeight="bold"
         
        
          
        >
          {exercise.name}
        </Typography>
      </Link>
    </>
  );
}

export default ExerciseCard;
