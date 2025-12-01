import React from 'react'
import { useState,useRef } from 'react'
function Timer() {
const timeRef= useRef(null)

const [time,setTime]= useState(0)
const [isActive,setIsActive]= useState(false)

const toggleTimer=()=>{
  if(isActive){
    // clear interval  to stop the timer 
     clearInterval(timeRef.current)
     timeRef.current = null

  } else{
  // start timer
   timeRef.current = setInterval( ()=>{
      setTime((prevTime)=> prevTime +1)
    },1000)
  
  } 
  setIsActive(!isActive)
}



const resetTimer=()=>{
  clearInterval(timeRef.current)
  timeRef.current = null
  setIsActive (false)
  setTime (0)
} 


  return (
    <div>Simple Timer

      <h1>{time}</h1>


      <button onClick={toggleTimer} className='mt-3 bg-green-500 text-white px-4 py-2 rounded cursor-pointer'>{isActive ? 'Pause' : 'Start'}</button>
<br />
      <button  onClick={resetTimer} className='mt-3 bg-red-500 text-white px-4 py-2 rounded cursor-pointer'>Reset</button>
    

    </div>
  )
}

export default Timer