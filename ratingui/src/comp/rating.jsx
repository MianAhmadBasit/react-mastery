 
 import {useState} from "react";
 
 const Rating =  () => {
  const [rating , setRating] = useState (0);
 const [ hover , setHover] = useState (0);



    const stars = Array.from({length:5}, (_,i)=> i + 1);
    const Feedback = [' Poor', 'Fair', 'Good', 'Very Good', 'Excellent']; 
//   const  clicked = (index) => { 

//     console.log("You clicked star number: ", index );
//   }

//   const hovered = (direction , index) => {  
//     console.log(`You hovered ${direction} star number: `, index );

//   }
    return (
    <div>
        {hover}
<h2>Rate our service</h2>  
  <div className="stars">
   Rating {rating} 
   {/* index as a params */}
   {stars.map((star )=>(
    <span 
    onClick={()=> setRating(star)}
    onMouseEnter={()=> setHover(star)}
    onMouseLeave={()=> setHover(0)}
    // onMouseEnter={()=> hovered('over', index)}
    // onMouseLeave={()=> hovered('out', index)}

    className={`star ${star <= (rating || hover) ?  'active' : ''}`} key={star}
    >{'\u2605'}</span>

   ))}


    
  </div>
  {
  

  
    rating >0 && <p className="feedback"> {Feedback[rating -1]}</p>
  }

  
    { 
    hover > 0 && <p className="feedback"> {Feedback[hover - 1]}</p>
  }

    </div>
  )
 }

 export default Rating;