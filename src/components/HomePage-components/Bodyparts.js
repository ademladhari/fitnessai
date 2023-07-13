import { Box } from '@mui/material';
import React, { useRef} from 'react';
import Bodypartsicons from './Bodypartsicons';
import {VscArrowCircleLeft} from "react-icons/vsc"
import {VscArrowCircleRight} from "react-icons/vsc"
import ExerciseCard from './ExerciseCard';


function Bodyparts({ data,isBodyParts}) {
  const containerRef = useRef(null);

  
  const handleScroll = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollLeft -= scrollOffset;
  };

  const handleLeftArrowClick = () => {
    handleScroll(100); 
  };

  const handleRightArrowClick = () => {
    handleScroll(-100); 
  };
  const handleRight = () => {
    if (isBodyParts) {
      return 'right-2';
    } else {
      return '-right-16';
    }
  };
  const handletop = () => {
    if (isBodyParts) {
      return 'top-1/2';
    } else {
      return ' top-52';
    }
  };

  return (
    <div className='relative mt-20 ' >
      
        <button onClick={handleLeftArrowClick}>
          <VscArrowCircleLeft size={50} color='#333333' handleRight className={`z-10 absolute top-  left-3 transition duration-300 ease-in-out hover:scale-125 overflow-y-hidden w-14 translate-x-3 ${handletop()}`}   />
        </button>
        <button onClick={handleRightArrowClick}>
          <VscArrowCircleRight size={50} color='#333333' className={`z-10 absolute transition duration-300 ease-in-out hover:scale-125 overflow-y-hidden w-14 ${handleRight()} ${handletop()}`   }/>
        </button>
      
      <div
        className='scroll-container   '       
        style={{       
          marginLeft:'10vh', 
         width:"185vh",  
        
          overscrollBehaviorY: 'none',
        }}
        onWheel={(e) => {
          handleScroll(e.deltaY);
          
        }}
        ref={containerRef}
      >
        <div   className='     '>
        {data.map((item, index) => (
          <Box  className='inline-block' key={item.id || item} itemId={item.id || item} title={item.id || item} m='0 20px'>
           {isBodyParts ? <Bodypartsicons index={index} item={item}></Bodypartsicons>
           : <ExerciseCard isBodyParts index={index} exercise={item}></ExerciseCard>}
          </Box>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Bodyparts;
