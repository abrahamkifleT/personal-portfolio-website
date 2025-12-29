import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-6 md:px-20 py-10 md:py-20">
                <h2 className="font-bold text-4xl md:text-5xl text-gray-800 mb-6 md:mb-10">Contact</h2>
                <div className="max-w-xl">
                    <p className="text-gray-600 text-lg mb-8">
                        I'd love to hear from you. Feel free to reach out using the information below.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-gray-900">Email:</span>
                            <span className="text-gray-600">contact@example.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-gray-900">Phone:</span>
                            <span className="text-gray-600">+123 456 7890</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
