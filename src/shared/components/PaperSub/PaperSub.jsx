import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill } from 'react-icons/pi'

export default function PaperSub() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3 mb-10">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Paper Submission</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[125px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[125px]' />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We’re here to help with any questions about the International Conference on Advanced Smart Technologies and AI Innovations—whether they involve registration, paper submissions, sponsorship opportunities, travel logistics, or general participation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-10 mt-5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="flex flex-col gap-3">
                                <p className="inter-medium text-lg">Submission Guidelines:</p>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3 ">
                                <p className="inter-medium text-lg">Important Notes:</p>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 border border-pink-300 rounded-lg">
                        <h2 className="text-lg font-semibold mb-8">Submit Your Paper</h2>
                        <form action="" className="space-y-10">
                            <input
                                type="text"
                                placeholder="Enter Your Paper Title"
                                className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                            />
                            <input
                                type="text"
                                placeholder="Enter Your Institution Name"
                                className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                            />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter Author’s Full Name"
                                    className="flex-1 border border-pink-300 focus:outline-none  rounded-xl px-3 py-3"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter Author’s Email"
                                    className="flex-1 border border-pink-300 focus:outline-none focus:ring-1 focus:ring-pink-400 rounded-xl px-3 py-3"
                                />
                            </div>
                            <select className="w-full border border-pink-300 focus:outline-none  rounded-xl px-3 py-3 text-gray-500">
                                <option>Select Your Category</option>
                                <option>AI</option>
                                <option>Machine Learning</option>
                                <option>Data Science</option>
                            </select>
                            <div className="relative w-full border-2 border-dashed border-pink-300 rounded-xl py-10 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                />
                                <FiUploadCloud className="text-3xl text-pink-500 mb-2 z-0" />
                                <p className="z-0">Click or Drag to Upload Paper</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-800 mt-4 cursor-pointer"
                            >
                                Submit Your Paper
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
