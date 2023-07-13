/* eslint-disable jsx-a11y/alt-text */

import lowerArms from '../../assets/images/lowerarm.png';
import upperArms from '../../assets/images/upper arm.png';
import chest from '../../assets/images/chest.png';
import waist from '../../assets/images/waist.png';
import lowerLegs from '../../assets/images/lower leggs.png';
import upperLegs from '../../assets/images/upperleggs.png';
import shoulders from '../../assets/images/shoulders.png';
import neck from '../../assets/images/neck.png';
import cardio from '../../assets/images/cardio.png';
import All from '../../assets/images/full body.png';
import back from '../../assets/images/back3.png';
import { useContext } from 'react';
import BodyPartContext from '../../util/context';

function BodyPartsIcons({ item,index }) {
  const bodyparts = [All, back,cardio,chest,lowerArms,lowerLegs,neck,shoulders,upperArms,upperLegs,waist];
  const {  setBodyPart } = useContext(BodyPartContext);

return (
  <>
          <button className='' key={index} onClick={()=>setBodyPart(item)}>
            <div className='flex flex-col text-center text-2xl transition duration-300 ease-in-out hover:scale-105 overflow-y-hidden '>
              <img className='h-44 w-44 inline-block rounded-3xl overflow-hidden mb-9 ' src={bodyparts[index]} />
              {item}
            </div>
            
          </button>
   
    
    
  </>
);
  }
 ;
 


export default BodyPartsIcons;
