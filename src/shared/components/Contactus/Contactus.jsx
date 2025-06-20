import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { PiStarFourFill } from 'react-icons/pi';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Contactus() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Contact Us</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[60px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[60px]' />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We’re here to help with any questions about the International Conference on Advanced Smart Technologies and AI Innovations—whether they involve registration, paper submissions, sponsorship opportunities, travel logistics, or general participation.</p>
                </div>
            </div>

            {/* contact form */}

            <div className="xl:max-w-[1150px]  md:max-w-[920px] mx-auto lg:mt-8 mt-5 p-3">
                <div className="bg-[#F6D5EA]  rounded-lg p-8">
                    <div className='flex justify-center text-center'>
                        <p className="hanuman-semibold text-xl  lg:text-xl max-w-[55rem]">Have Questions about INCOCSA? We’re here to help! Feel free to reach out.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-7  mt-8">
                        <form action="mailto:sathish49061@gmail.com" method="post" role="form">
                            <div className="flex flex-col  gap-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter Your First Name"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter Your Last Name "
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter Your Email"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter Your Phone Number"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                        />
                                    </div>
                                    <div className='lg:col-span-2'>
                                        <textarea
                                            type="textarea"
                                            id="name"
                                            placeholder="Enter Your Message"
                                            className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            rows="5"
                                        >

                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="btn hover-border cursor-pointer">
                                        <button type='submit' className="bg-[#1F1F1F] hanuman-medium text-base lg:text-lg text-white transition-all duration-200 py-1 px-3 rounded">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="flex flex-col lg:gap-10 gap-5">
                            <p className="hanuman-semibold text-xl  lg:text-xl">
                                We would love to hear from you!
                            </p>

                            {/* Phone */}
                            <div className="flex flex-row items-start gap-3">
                                <FaPhoneAlt className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Phone</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">+91 0101010101</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-row items-start gap-3">
                                <IoIosMail className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Email</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">incocsa.conference@gmail.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-row items-start gap-3">
                                <FaLocationDot className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E0048B] flex-shrink-0 mt-1' />
                                <div className="flex flex-col gap-1">
                                    <p className="inter-semibold text-lg">Location</p>
                                    <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-gray-700 break-words">Chennai, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
