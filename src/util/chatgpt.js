
import React, { useEffect } from 'react';
import { useState } from 'react';

const OpenAICompletion = ({exercise,userData}) => {
  const [text,setText]=useState("")
  
  useEffect(() => { 
    const runCompletion = async () => {
      const prompt=(userData)=>{
 
      if (Object.keys(userData).length !== 0){
      
      return  `I want you to act as a gym coach and provide me with a
       personalized exercise description of ${exercise} that takes into account my ${userData.savedshow[0].height}, ${userData.savedshow[0].weight}
       , ${userData.savedshow[0].age}, and any ${userData.savedshow[0].injuries} I may have. Please generate a concise no matter what of  200-letter description of an 
       ${exercise} that suits my specific needs and how many sets should i make.`;}
       else{
       
        return `I want you to act as a gym coach and provide me with a
        personalized exercise description of ${exercise} that takes into account 
        any injuries that may result. Please generate a concise no matter what of  200-letter description of an 
        ${exercise} that suits my specific needs.`}
      }
      const maxTokens = 200;
 

      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.REACT_APP_OPENAI_API_KEY,
        },
        body: JSON.stringify({
          prompt: prompt(userData),
          max_tokens: maxTokens,
        }),
      });

     

      if (response.ok) {
        const data = await response.json();
        setText(data.choices[0].text);
      } else {
        setText("Error: Unable to fetch data.");
      
    };
  }
    runCompletion()

  }, [exercise, userData]);

  
  return (
    
    <p className=' text-scroll   overflow-y-scroll      h-60'>{text}
   </p>
  )
  
};

export default OpenAICompletion;