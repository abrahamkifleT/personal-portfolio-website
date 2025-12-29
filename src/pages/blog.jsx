import React from 'react'
import Header from '../component/Header'

const Blog = () => {
    return (
        <div className='mx-auto'>
            <Header />

            <div className='container mx-auto px-6 md:px-20 py-10'>
                <p className='text-3xl md:text-4xl font-bold mb-8 md:mb-12'>Blog</p>

                <div className='flex flex-col gap-8'>
                    {/* Blog Item 1 */}
                    <div className='border-b border-gray-200 pb-8'>
                        <h1 className='text-2xl md:text-3xl font-medium text-gray-900 mb-3'>Ui Interaction of week</h1>
                        <div className='flex items-center gap-4 text-lg text-gray-600 mb-4'>
                            <p>12 Feb 2019</p>
                            <span>|</span>
                            <p className='text-gray-500'>Express, Handlebar</p>
                        </div>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    {/* Blog Item 2 */}
                    <div className='border-b border-gray-200 pb-8'>
                        <h1 className='text-2xl md:text-3xl font-medium text-gray-900 mb-3'>Ui Interaction of week</h1>
                        <div className='flex items-center gap-4 text-lg text-gray-600 mb-4'>
                            <p>12 Feb 2019</p>
                            <span>|</span>
                            <p className='text-gray-500'>Express, Handlebar</p>
                        </div>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    {/* Blog Item 3 */}
                    <div className='border-b border-gray-200 pb-8'>
                        <h1 className='text-2xl md:text-3xl font-medium text-gray-900 mb-3'>Ui Interaction of week</h1>
                        <div className='flex items-center gap-4 text-lg text-gray-600 mb-4'>
                            <p>12 Feb 2019</p>
                            <span>|</span>
                            <p className='text-gray-500'>Express, Handlebar</p>
                        </div>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    {/* Blog Item 3 */}
                    <div className='border-b border-gray-200 pb-8'>
                        <h1 className='text-2xl md:text-3xl font-medium text-gray-900 mb-3'>Ui Interaction of week</h1>
                        <div className='flex items-center gap-4 text-lg text-gray-600 mb-4'>
                            <p>12 Feb 2019</p>
                            <span>|</span>
                            <p className='text-gray-500'>Express, Handlebar</p>
                        </div>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog