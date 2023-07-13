import React from 'react'
function ExerciseDescription(exerciseDetail) {
  
    const {bodyPart,name,target,equipment}= exerciseDetail;
    const generateRandomSentence = () => {
    const sentences = [
        "Experience the transformative '{name}' exercise, a {target} focused workout that challenges your {bodyPart} using {equipment}. Unleash your full potential and redefine your fitness journey.",
        "Maximize your gains with the dynamic '{name}' exercise, designed to target {target} muscles in your {bodyPart}. Whether you're a beginner or advanced, this versatile workout can be performed with {equipment} or bodyweight.",
        "Step up your fitness game with the intense '{name}' exercise, known for its ability to sculpt your {bodyPart} and engage {target} muscles. Amp up the challenge by incorporating {equipment} variations.",
        "Achieve a well-rounded physique with the multifaceted '{name}' exercise. This comprehensive workout targets {target} muscles in your {bodyPart}, utilizing {equipment} to enhance resistance and intensity.",
        "Elevate your workout routine with the dynamic '{name}' exercise, renowned for its ability to strengthen your {bodyPart} and activate {target} muscles. Experiment with different {equipment} options to keep your workouts engaging.",
        "Unleash your inner athlete with the '{name}' exercise, a high-intensity training that targets {target} muscles in your {bodyPart}. Push your limits and enhance your performance using {equipment}.",
        "Challenge your {bodyPart} with the empowering '{name}' exercise, known for its ability to target {target} muscles and improve overall strength. Explore different {equipment} variations to keep your workouts exciting.",
        "Experience a total body transformation with the '{name}' exercise, designed to sculpt your {bodyPart} while targeting {target} muscles. Amplify the challenge by incorporating specialized {equipment}.",
        "Enhance your flexibility and strengthen your {bodyPart} with the '{name}' exercise, a dynamic workout that targets {target} muscles. Explore variations using {equipment} or bodyweight to cater to your fitness level.",
        "Unleash the power of your {bodyPart} with the '{name}' exercise, a highly effective workout that targets {target} muscles. Push your limits and experiment with different {equipment} options for optimal results."
    , "Ignite your {bodyPart} with the invigorating '{name}' exercise, designed to target {target} muscles and enhance overall strength. Push yourself to new heights using {equipment}.",
    "Unlock the potential of your {bodyPart} with the transformative '{name}' exercise. Sculpt and tone {target} muscles while improving flexibility. Incorporate {equipment} variations for added challenge.",
    "Experience a full-body burn with the '{name}' exercise, a dynamic workout that engages {target} muscles in your {bodyPart}. Elevate your fitness journey by incorporating {equipment} options.",
    "Challenge your limits with the advanced '{name}' exercise, known for its ability to sculpt and define {bodyPart} muscles while targeting {target} muscles. Push yourself further with different {equipment} variations.",
    "Elevate your performance with the high-intensity '{name}' exercise, designed to strengthen your {bodyPart} and activate {target} muscles. Incorporate {equipment} to add resistance and intensity.",
    "Unleash your inner strength with the empowering '{name}' exercise, a challenging workout that targets {target} muscles in your {bodyPart}. Embrace the burn and push beyond your limits using {equipment}.",
    "Improve your overall fitness with the dynamic '{name}' exercise, known for its ability to engage {target} muscles while toning your {bodyPart}. Enhance your workout with {equipment} variations.",
    "Sculpt your {bodyPart} and build functional strength with the '{name}' exercise. Target {target} muscles and unlock new levels of fitness. Explore different {equipment} options for a customized workout.",
    "Enhance your endurance and target {target} muscles with the cardiovascular '{name}' exercise. Strengthen your {bodyPart} while engaging in a challenging and energizing workout.",
    "Activate your {bodyPart} muscles with the '{name}' exercise, designed to target {target} muscles and improve stability. Incorporate {equipment} variations for an added challenge."  ,
        "Unlock the power of your {bodyPart} with the '{name}' exercise, a versatile workout that targets {target} muscles and improves overall functional fitness. Explore different {equipment} options for variety.",
        "Engage your {bodyPart} muscles with the dynamic '{name}' exercise, known for its ability to strengthen and tone {target} muscles. Push your limits and experiment with various {equipment} variations.",
        "Experience the burn with the intense '{name}' exercise, designed to challenge your {bodyPart} and engage {target} muscles. Amplify the workout with different {equipment} options.",
        "Transform your {bodyPart} with the empowering '{name}' exercise, known for its ability to sculpt and define {target} muscles. Push your boundaries and enhance your performance with {equipment}.",
        "Enhance your athletic performance with the '{name}' exercise, a functional workout that targets {target} muscles in your {bodyPart}. Incorporate {equipment} variations for added challenge.",
        "Maximize your {bodyPart} gains with the '{name}' exercise, a focused workout that targets {target} muscles and improves strength. Experiment with different {equipment} options for optimal results.",
        "Challenge your {bodyPart} muscles with the dynamic '{name}' exercise, designed to engage and strengthen {target} muscles. Explore {equipment} variations for progressive overload.",
        "Experience the intensity of the '{name}' exercise, a high-impact workout that targets {target} muscles in your {bodyPart}. Push your limits and unleash your potential with {equipment}.",
        "Sculpt your {bodyPart} with the powerful '{name}' exercise, known for its ability to activate and strengthen {target} muscles. Enhance your workouts with {equipment} variations.",
        "Activate your {bodyPart} muscles with the invigorating '{name}' exercise, designed to target {target} muscles and improve stability. Incorporate {equipment} variations for a challenging workout.",
        "Unleash your strength with the '{name}' exercise, a full-body workout that targets {target} muscles and improves overall fitness. Embrace the burn and push yourself to new heights.",
        "Challenge your {bodyPart} with the effective '{name}' exercise, known for its ability to engage {target} muscles and enhance muscle definition. Incorporate {equipment} for added resistance.",
        "Boost your {bodyPart} strength with the challenging '{name}' exercise, designed to target {target} muscles and improve muscular endurance. Experiment with different {equipment} variations.",
        "Experience the versatility of the '{name}' exercise, a full-body workout that targets {target} muscles and improves functional fitness. Embrace the challenge using {equipment} or bodyweight.",
        "Elevate your {bodyPart} workouts with the dynamic '{name}' exercise, known for its ability to engage and strengthen {target} muscles. Explore {equipment} variations for progressive overload.",
        "Achieve balance and stability with the '{name}' exercise, a functional workout that targets {target} muscles in your {bodyPart}. Incorporate {equipment} variations for added challenge.",
        "Activate and sculpt your {bodyPart} with the powerful '{name}' exercise, designed to engage and strengthen {target} muscles. Push yourself further using {equipment} options.",
        "Unleash your potential with the versatile '{name}' exercise, a challenging workout that targets {target} muscles in your {bodyPart}. Explore different {equipment} options for variety.",
        "Enhance your {bodyPart} strength with the effective '{name}' exercise, known for its ability to target {target} muscles and improve overall fitness. Incorporate {equipment} variations for added resistance.",
        "Experience the burn and define your {bodyPart} with the empowering '{name}' exercise. Sculpt and tone {target} muscles while incorporating {equipment} variations.",
        "Activate your {bodyPart} muscles and challenge your {target} muscles with the '{name}' exercise. Push your limits and unlock your fitness potential with {equipment} variations."  
];
  
const selectedIndices = [];

// Return a function that retrieves the next sentence

  if (selectedIndices.length === sentences.length) {
    // All sentences have been used, reset the selected indices
    selectedIndices.length = 0;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * sentences.length);
  } while (selectedIndices.includes(randomIndex));

  // Mark the index as selected
  
  return sentences[randomIndex];
};    
  const renderRandomSentence = () => {
   
    const sentenceTemplate = generateRandomSentence();
    const renderedSentence = sentenceTemplate
      .replace("{name}",name)
      .replace("{target}", target)
      .replace("{bodyPart}",bodyPart)
      .replace("{equipment}", equipment);
      return renderedSentence;
  }
 
  return (
    <>
      <p>{renderRandomSentence()}</p>
    </>
  )
}

export default ExerciseDescription