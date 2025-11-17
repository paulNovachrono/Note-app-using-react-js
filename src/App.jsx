import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {

  const [noteHeading, setNoteHeading] = useState('')
  const [noteDetails, setNoteDetails] = useState("")
  const [taskArray, setTaskArray] = useState([])
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(noteHeading);
    console.log(noteDetails);

    const copyTask = [...taskArray] //copy the task array
    copyTask.push({noteHeading, noteDetails}) // push the heading and details as object
    setTaskArray(copyTask) // set the value to the taskArray so we can see the change

    console.log(copyTask);
    

    setNoteHeading("")
    setNoteDetails("")

  }

  const deleteTask = (taskIdx) =>{
    console.log("del", taskIdx);
    // copy all task in an array then use splice to remove the element
    const copyTask = [...taskArray]
    copyTask.splice(copyTask[taskArray],1) // take the index you want to delete and delete 1 item
    setTaskArray(copyTask) // chnage the taskArray with it
  }

  return (
    <div 
    className="min-h-screen w-full bg-rose-500 flex flex-col items-center py-10 md:py-20 overflow-y-auto">

  {/* heading for form */}
  <div className="w-full max-w-2xl px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Write your thoughts here!
    </h2>

    <form 
    onSubmit={(e) => handleSubmit(e)}
    className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-white flex flex-col gap-6">
      {/* Heading */}
      <input
        className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
        type="text"
        placeholder="Your thoughts? "
        value={noteHeading}
        onChange={(e) => setNoteHeading(e.target.value)}
        required
      />

      {/* Details */}
      <textarea
        className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-4 placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
        rows="5"
        placeholder="Write more details..."
        value={noteDetails}
        onChange={(e) => setNoteDetails(e.target.value)}
        required
      />

      <button className="w-full bg-white text-rose-600 font-semibold py-3 rounded-xl hover:bg-rose-50 transition active:scale-95">
        Submit
      </button>

    </form>
  </div>

  {/* Notes Section */}
  <div className="w-full px-6 mt-16 max-w-6xl">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
      Your Recent Thoughts....
    </h1>

    <div className="flex flex-wrap gap-6">
      {taskArray.map((value, idx) => {
        return <Note 
                  value={value} 
                  key={idx} 
                  deleteTask={() => deleteTask(idx)}/>
          })}
      
      {/* Render multiple notes */}
    </div>
  </div>

</div>

  )
}

export default App