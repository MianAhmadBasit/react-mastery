
import { useRef } from 'react'
import Timer from './project/timer'


function App() {

  const inputRef = useRef (null)
  const submit = () => {
   console.log(inputRef.current)
    console.log (inputRef.current.value)
    inputRef.current.value= ''
    inputRef.current.focus()
    inputRef.current.style.border = '2px solid red'
    inputRef.current.style.backgroundColor = 'yellow'
    inputRef.current.setAttribute('placeholder', 'You submitted your data')
   
  }

  return (
    <div>example of 
    
    
    <br />
        <input ref={inputRef} type="text" className="border-2 border-blue-500" placeholder='Type your data...'  / >
       <button className = "border-2 border-green-500 bg-amber-400 " onClick={submit}> Submit</button>

    <Timer />

    
    </div>
     


  )
}


export default App