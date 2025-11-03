 
 import {useState} from "react";
import Star from "./star";
 
 const Rating =  () => {

  const heading = "Rating Component";
  const color = "#ffb400";


  const [rating , setRating] = useState (0);
 const [ hover , setHover] = useState (0);
  const [submitted , setSubmitted] = useState (false);

    const stars = Array.from({length:5}, (_,i)=> i + 1);
    const Feedback = [' Poor', 'Fair', 'Good', 'Very Good', 'Excellent']; 


const handleSubmit = () => {

if(rating > 0) {

  setSubmitted (true);
}

}


const closeModal = () => {
  setSubmitted (false);
  setRating(0);
  setHover(0);
}

    //   const  clicked = (index) => { 

//     console.log("You clicked star number: ", index );
//   }

//   const hovered = (direction , index) => {  
//     console.log(`You hovered ${direction} star number: `, index );

//   }
    return (
    <div className="rating-container"> 
        {hover}
<h2>{heading}</h2>  
  <div className="stars">
   Rating {rating} 
   {/* index as a params */}
   {stars.map((star )=>(
 
 
<Star
  key={star}
  star={star}
  rating={rating}
  hover={hover}
  color={color}
  ratingClick={setRating}
  hoverEnter={setHover}
  hoverLeave={()=> setHover(null)}

 
//  <span 
//     onClick={()=> setRating(star)}
//     onMouseEnter={()=> setHover(star)}
//     onMouseLeave={()=> setHover(0)}
    // onMouseEnter={()=> hovered('over', index)}
    // onMouseLeave={()=> hovered('out', index)}

    // className={`star ${star <= (rating || hover) ?  'active' : ''}`} key={star}
    // >{'\u2605'}</span>

  
  />
  
  
  
  ))}


    
  </div>
  {
  

  
    rating >0 && <p className="feedback"> {Feedback[rating -1]}</p>
  }

  
    {/* { 
    hover > 0 && <p className="feedback"> {Feedback[hover - 1]}</p>
  } */}


    <button className="submit-button" onClick={handleSubmit} disabled={rating===0}>Submit</button>
   {/* Modal */}
{
  submitted && (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Thank you for your feedback!</h2>
        <p>You rated this {rating} out of 5. star is{rating > 1 ? 's' : ''}</p>
        <button className="close-button" onClick={closeModal}>Close</button>

      </div>
    </div>
  )
}




    </div>
  )
 }

 export default Rating;