import React from 'react'

const Note = ({value, deleteTask}) => {
 
  return (
    <div className="relative">
          <div className="w-72 min-h-60 bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-2xl p-6 text-white shadow-xl flex flex-col hover:scale-[1.02] 
          transition-all duration-300 cursor-pointer">
            <div className="">
              <h2 className="text-xl font-bold tracking-wide">{value.noteHeading?value.noteHeading:"Write Your Thoughts"}</h2>

              <div className="my-3 h-[1px] bg-white/30"></div>

              <p className="text-sm leading-relaxed text-white/90">
              {value.noteDetails? value.noteDetails: "Write your thought description here"}
              </p>
            </div>
            
        
          </div>
          <button 
          onClick={deleteTask}
          className='w-full px-5 py-2 bg-zinc-100/30 rounded-2xl text-white border border-white/20 backdrop-blur-lg shadow-xl hover:scale-[1.02] hover:bg-white hover:text-rose-600 
          transition-all duration-300 cursor-pointer mt-2'>Delete</button>
    </div>

  )
}

export default Note