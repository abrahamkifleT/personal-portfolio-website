import React from 'react'

const Recent_post = () => {
    return (
        <div className='bg-blue-100 py-12 mt-12'> {/* Added background color and vertical spacing */}
            <div className='container mx-auto px-6 md:px-20'> {/* Matches Dashboard alignment */}

                <div className='flex items-center justify-between mb-6'>
                    <p className='text-xl font-semibold'>Recent Post</p>
                    <a href="#" className='text-blue-500 hover:text-blue-700 font-medium'>View all</a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> {/* Used Grid for equal width cards */}

                    <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                        <h2 className='text-2xl font-bold mb-4'>Making a design system from scratch</h2>
                        <div className='flex items-center gap-4 text-gray-500 mb-4 text-sm'>
                            <p>12 Feb 2020</p>
                            <span>|</span>
                            <p>Design, Pattern</p>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis. Cupiditate error esse facere, necessitatibus laborum molestias obcaecati laudantium ut.
                        </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                        <h2 className='text-2xl font-bold mb-4'>Creating pixel perfect icons in Figma</h2>
                        <div className='flex items-center gap-4 text-gray-500 mb-4 text-sm'>
                            <p>12 Feb 2020</p>
                            <span>|</span>
                            <p>Figma, Icon Design</p>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis. Cupiditate error esse facere, necessitatibus laborum molestias obcaecati laudantium ut.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recent_post