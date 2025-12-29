import React from 'react'

const Work = () => {
    return (
        <div className='container mx-auto px-6 md:px-20 py-10 md:py-20 overflow-x-hidden'>
            <h2 className='font-bold text-4xl md:text-5xl text-gray-800 mb-6 md:mb-10'>Work</h2>

            <div className='flex flex-col md:flex-row gap-6 md:gap-8 border-b border-gray-200 pb-10'>
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Dashboard styling"
                    className='w-full md:w-64 h-48 md:h-auto rounded-xl object-cover'
                />

                <div className='flex flex-col justify-start'>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>Designing Dashboards</h3>
                    <div className='flex items-center gap-6 mb-4'>
                        <span className='bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold'>2020</span>
                        <span className='text-gray-500 text-lg'>Dashboard</span>
                    </div>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>


            <div className='hidden md:flex flex-col md:flex-row gap-6 md:gap-8 border-b border-gray-200 pb-10'>
                <img
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Vibrant Portraits"
                    className='w-full md:w-64 h-48 md:h-auto rounded-xl object-cover'
                />

                <div className='flex flex-col justify-start'>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>Vibrant Portraits of 2020</h3>
                    <div className='flex items-center gap-6 mb-4'>
                        <span className='bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold'>2018</span>
                        <span className='text-gray-500 text-lg'>Illustration</span>
                    </div>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>

            {/* Work Item 3 */}
            <div className='hidden md:flex flex-col md:flex-row gap-6 md:gap-8 border-b border-gray-200 pb-10'>
                <img
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="36 Days of Malayalam type"
                    className='w-full md:w-64 h-48 md:h-auto rounded-xl object-cover'
                />

                <div className='flex flex-col justify-start'>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>36 Days of Malayalam type</h3>
                    <div className='flex items-center gap-6 mb-4'>
                        <span className='bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold'>2018</span>
                        <span className='text-gray-500 text-lg'>Typography</span>
                    </div>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Work