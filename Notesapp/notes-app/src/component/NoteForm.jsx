import { useState } from "react"


function NoteForm() {
//   const [title , setTitle] = useState('')
//    const [priority , setPriority] = useState('Medium')
//     const [category , setCategory] = useState('work')
//     const [description , setDescription] = useState('')

const [form , SetFormData] = useState(
    {
        title : "" ,
        priority : "Medium",
        category : "work " , 
        description : "" 

    }
)
const handleChange = (e) => {
//    console.log(e.target.value)
  SetFormData({...form , [e.target.name] : e.target.value})
  console.log({...form , [e.target.name] : e.target.value})

}
    
  
    return (
    <form className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">Title</label>
            <input type="text" name="title" className="w-full p-2 border rounded-lg" value={form.title} onChange={handleChange}/>


        </div>

        {/* 2nd */}
    <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">priority</label>

            <select type="text" name="priority" className="w-full p-2 border rounded-lg" value={form.priority} onChange={handleChange}>
    <option value="High">High</option>
   <option value="Medium">Medium</option>
   <option value="Low">Low</option>
    </select>
        </div>

{/* 3 */}
<div className="mb-4">
            <label htmlFor="priority" name="category" className="block font-semibold">category</label>

            <select type="text" className="w-full p-2 border rounded-lg" value={form.category} onChange={handleChange}>
    <option value="work">Work</option>
   <option value="personal">Personal</option>
   <option value="ideas">Ideas</option>
    </select>
        </div>


        {/* 4 */}
<div className="mb-4">
            <label htmlFor="description" className="block font-semibold">Description</label>

            <textarea type="text" name="description" className="w-full p-2 border rounded-lg" value={form.description} onChange={handleChange}>
  
    </textarea>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Notes</button>



    </form>


  )
}

export default NoteForm