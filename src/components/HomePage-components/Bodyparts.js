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
    if(isBodyParts){
    handleScroll(530);
    }else
    {handleScroll(210)} 
  };

  const handleRightArrowClick = () => {
    if(isBodyParts){
    handleScroll(-530);
    }else
    {handleScroll(-210)} 
  };
  const handleRight = () => {
    if (isBodyParts) {
      return '-right-14';
    } else {
      return '-right-14';
    }
  };
  const handletop = () => {
    if (isBodyParts) {
      return 'top-1/2';
    } else {
      return ' top-52';
    }
  };
  const handlewidth=()=>{
    if (isBodyParts){
    return 'w-[80%] ml-[5%]'
    }
    else{
      return 'w-[83%]'
    }
  }

  return (
    <div className={`relative mt-20 xl:ml-0   xl:w-[94%] ${handlewidth()} `} >
      
        <button onClick={handleLeftArrowClick}>
          <VscArrowCircleLeft size={50} color='#333333'  className={`z-10 absolute     transition duration-300 ease-in-out hover:scale-125 overflow-y-hidden w-10 ${handletop()}`}   />
        </button>
        <button onClick={handleRightArrowClick}>
          <VscArrowCircleRight size={50} color='#333333' className={`z-10 absolute transition duration-300 ease-in-out hover:scale-125 overflow-y-hidden w-10 ${handleRight()} ${handletop()}`   }/>
        </button>
      
      <div
        className='scroll-container ml-10 sm:ml-12     '       
        style={{       
          
       
        
          overscrollBehaviorY: 'none',
        }}
        onWheel={(e) => {
          handleScroll(e.deltaY);
          
        }}
        ref={containerRef}
      >
        <div   className=' '>
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
