import React from 'react'

const Footer = () => {
    return (
        <footer className='py-12 mt-10'>
            <div className='container mx-auto px-6 text-center'>

                {/* Social Icons */}
                <div className='flex justify-center gap-8 mb-6'>
                    {/* Facebook */}
                    <a href="#" className="text-gray-800 hover:text-[#4267B2] transition-colors" aria-label="Facebook">
                        <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.05 16.39 6.09V8.71H14.85C13.63 8.71 13.4 9.29 13.4 10.14V12.06H16.29L15.91 14.96H13.4V21.96C18.19 21.21 21.85 17.06 21.85 12.06C21.85 6.53 17.35 2.04 12 2.04Z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="#" className="text-gray-800 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                        <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5Z" />
                        </svg>
                    </a>

                    {/* Twitter */}
                    <a href="#" className="text-gray-800 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                        <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.26,19.13 1.96,19.11 1.66,19.09C3.56,20.29 5.81,21 8.21,21C16.08,21 20.38,14.49 20.38,8.79C20.38,8.6 20.38,8.42 20.37,8.23C21.2,7.65 21.92,6.88 22.46,6Z" />
                        </svg>
                    </a>

                    {/* Linkedin */}
                    <a href="#" className="text-gray-800 hover:text-[#0A66C2] transition-colors" aria-label="Linkedin">
                        <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className='text-gray-500 text-sm font-medium'>
                    Copyright ©2025 All rights reserved
                </p>

            </div>
        </footer>
    )
}

export default Footer
