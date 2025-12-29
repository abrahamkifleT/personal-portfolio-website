import React from 'react'
import Button from '../component/Button'
import Header from '../component/Header'

const Dashboard = () => {
  return (
    <div className='mx-auto'>
      <Header />

      <div className='container mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between gap-12'>


        {/* about me page on the right */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:mx-20'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
            Hi, I am Jone, <br />
            <span className="text-blue-600">Creative Technologist</span>
          </h1>
          <p className='text-lg text-gray-600 leading-relaxed max-w-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut corrupti quas saepe commodi earum magnam, perferendis esse natus blanditiis quo voluptate autem eos nulla veritatis illo! Repellat nobis accusamus voluptate?
          </p>
          <Button />
        </div>



        {/* image profile */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-start '>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 max-w-md rounded-full shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Dashboard