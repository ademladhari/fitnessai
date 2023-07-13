import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function ExercisesVideos({exerciseVideo,name}) {

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
    <Typography textAlign="center"  sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="43px">
      Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
    </Typography>
    <Stack  sx={{marginX:'15%', flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '0px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
      {exerciseVideo?.slice(1, 4)?.map((item, index) => (
        <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer">
          <img  style={{ borderTopLeftRadius: '20px',maxWidth:"350px",borderRadius:"10px" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
            <Typography sx={{ fontSize: { lg: '1.1rem', xs: '1em' },marginBottom:'15px' ,width:"300px",display:'flex',height:"60px",marginTop:'10px' }} fontWeight={600} color="#000">
              {item.video.title}
            </Typography>
            <Typography fontSize="1rem" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        </a>
      ))}
    </Stack>
  </Box>
  )
}

export default ExercisesVideos