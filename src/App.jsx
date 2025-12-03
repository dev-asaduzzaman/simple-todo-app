import React from 'react'

import './App.css'
import Navbar from './components/Nabvar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl shadow-lg p-5 bg-violet-100'>
        <h1 className='font-bold text-xl mb-5'>Add Todo</h1>
        <div className="add-todo flex justify-between align-center">
          <input type="text" className='p-2 rounded-lg  mb-3 w-[600px]' placeholder='Enter your todo' />
          <button className='bg-violet-500 text-white px-4 rounded-lg hover:bg-violet-600'>Add Todo</button>
        </div>

        <h1 className='font-bold text-xl mt-5'>Your Todos</h1>
        <div className="todos">
          <div className="todo flex justify-between bg-white p-4 my-2 rounded-lg shadow-md">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="buttons flex gap-2">
              <button className='bg-violet-500 text-white px-6 py-2 rounded-2xl'>Edit</button>
              <button className='bg-violet-500 text-white px-6 py-2 rounded-2xl'>Delete</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App  
