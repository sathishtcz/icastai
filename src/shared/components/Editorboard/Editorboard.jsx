import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill, PiUsersThreeLight } from 'react-icons/pi'

export default function Editorboard() {
    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="playfair-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Editorial Board</h1>
                    <div className="hidden lg:block">
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[100px]' />
                            <PiStarFourFill className='text-[#E0048B] logo-spin' />
                            <div className='h-[1.5px] bg-gradient-to-r from-[#E0048B] to-[#83268E] w-[100px]' />
                        </div>
                    </div>
                </div>
                <div className="lg:mt-7 mt-4">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The Editorial Board of the International Conference on Advanced Smart Technologies and AI Innovations comprises distinguished scholars, researchers, and industry leaders from around the world. With deep expertise across various domains of artificial intelligence, smart systems, and emerging technologies, the board ensures the highest standards of academic integrity, technical quality, and innovation.</p>
                    <div className="lg:mt-7 mt-4 flex flex-col gap-3">
                        <p className="inter-medium text-xl">Roles and Responsibilities:</p>

                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Reviewing and evaluating submitted research papers for technical accuracy, originality, and relevance.</p>
                        </div>

                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Guiding the overall thematic structure and focus areas of the conference.</p>
                        </div>


                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensuring ethical publishing practices and peer-review standards.</p>
                        </div>


                        <div className="flex gap-2 items-start">
                            <GoDotFill className="text-[#ce1687] text-lg mt-[6px] flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Promoting interdisciplinary collaboration and international participation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="playfair-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">Our Distinguished Editorial Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:mt-10 mt-5 xl:max-w-[1250px]  md:max-w-[1200px] mx-auto p-5">
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Dr John Smith</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Editor-in-chief</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Prince Mohammed Bin Fahd University</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Machine Learning
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> USA
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Dr. Emily Carter</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Editor-in-chief</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Massachusetts Institute of Technology</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Artificial Intelligence
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> USA
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Prof. Rajesh Kumar</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Associate Editor</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Indian Institute of Technology Delhi</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Data Science & Big Data Analytics
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> India
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Dr. Sarah Al-Mansoori</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Managing Editor</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Khalifa University</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Cybersecurity
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> UAE
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Prof. Marco Rossi</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Editorial Board Member</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">University of Bologna</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Internet of Things (IoT)
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> Italy
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div>
                            <p className="inter-medium text-2xl text-black">Dr. Lina Zhang</p>
                            <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">Editor</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"> <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Tsinghua University</p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Cloud Computing & Distributed Systems
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> China
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
