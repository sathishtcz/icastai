import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiStarFourFill, PiUsersThreeLight } from 'react-icons/pi'

export default function Editorboard() {

    const editors = [
    
    {
        name: "Md Foysal",
        department: "Department of Electronics and Communication Engineering",
        university: "Khulna University of Engineering and Technology",
        location: "Bangladesh"
    },{
        name: "Maheshwari V",
        department: "Department of  Information Technology and Engineering",
        university: "Vellore Institute of Technology",
        location: "India"
    },
    {
        name: "Marwan Ramdhany Edy",
        department: "Department of Informatics and Computer Engineering",
        university: "University of Diponegoro",
        location: "Indonesia"
    },
    {
        name: "Abderrahim Bouchair",
        department: "Department of Computer Science",
        university: "University of Oran1 Ahmed Ben Bella",
        location: "Algeria"
    },
    {
        name: "Zhao Qianyi",
        university: "Jinan University",
        location: "China "
    },
    {
        name: "Deevi Radha Rani",
        department: "Department of Computer Science and Engineering",
        university: "Vignan's Foundation for Science, Technology & Research",
        location: "India "
    },
    {
        name: "Md Moshiur Rahman",
        department: "Department of Computer Science and Engineering",
        university: "Bangladesh Open University",
        location: "Bangladesh "
    },
    {
        name: "Karima Benhamza",
        university: "University of Guelma",
        location: "Algeria"
    },
    {
        name: "Sapna Juneja",
        university: "KIET Group of Institutions",
        location: "India "
    },
    {
        name: "Leandro N. Balico",
        department: "Department of Computer Science",
        university: "Federal University of Roraima",
        location: "Brazil "
    },
    {
        name: "M. Rajalakshmi",
        department: "Department of Mechatronics Engineering",
        university: "Jyothi Engineering College",
        location: "India "
    },
    {
        name: "Junaid Ahmed",
        university: "Zhengzhou University",
        location: "China "
    },
    {
        name: "A.Rama Prasath",
        department: "Department of Computing Sciences",
        university: "Hindustan University",
        location: "India "
    },
     {
        name: "C Karthik",
        department: "Department of Mechatronics Engineering",
        university: "Jyothi Engineering College",
        location: "India "
    },
    {
        name: "T. Ananth Kumar",
        department: "Department of Computer Science and Engineering",
        university: "IFET College of Engineering ",
        location: "India "
    },
    {
        name: "Aria Hendrawan",
        university: "Universitas Semarang",
        location: "Indonesia"
    },
    {
        name: "Zonghai Wang",
        university: "Nanjing Agricultural University",
        location: "China"
    },
    {
        name: "Awder Omar Abdulqadir",
        university: " University of Halabja",
        location: "Iraq"
    },
    {
        name: "Salah Eddine Benatia",
        department: "Department of Computer Science",
        university: "Mascara University",
        location: "Algeria"
    },
    {
        name: "Sajib Kumar Mitra",
        department: "Department of Computer Science",
        university: "University of Dhaka",
        location: "Bangladesh"
    },
    {
        name: "Hua Qu",
        university: "Tianjin Medical University",
        location: "China"
    },
    {
        name: "Syed Asim Ali Shah",
        university: "Bahria University",
        location: "Pakistan"
    },
    
    {
        name: "Mohammad Tolou Askari",
        university: "Islamic Azad university",
        location: "Iran"
    },
    {
        name: "Sutikno",
        department: "Department of Informatics",
        university: "University of Diponegoro",
        location: "Indonesia"
    },
    {
        name: "Masoud Asghari",
        university: "University of Maragheh",
        location: "Iran"
    },
    {
        name: "Ahmed Alkhayyat",
        university: "The Islamic University",
        location: "Iraq"
    },
    {
        name: "Muhammad Ayoub Kamal",
        department: "Department of Computer Science",
        university: "DHA Suffa University",
        location: "Pakistan"
    },
    {
        name: "Ali Rizwan",
        department: "Department of Industrial Engineering",
        university: "King Abdulaziz University",
        location: "Saudi Arabia"
    },
    {
        name: "Hea Choon Ngo",
        university: "Universiti Teknikal Malaysia Melaka",
        location: "Malaysia"
    },
    {
        name: "Abdul Rehman Baloch",
        department: "Department of Computer Science",
        university: "Iqra University",
        location: "Pakistan"
    },
    {
        name: "Elegbeleye Femi Abiodun",
        university: "Walter Sisulu University",
        location: "South Africa"
    },
    {
        name: "Rahman Shafique",
        department: "Department of Information and Communication Engineering",
        university: "Yeungnam University",
        location: "South Korea"
    },
     {
        name: "PPG Dinesh Asanka",
        department: "Department of Industrial Management",
        university: "University of Kelaniya",
        location: "Sri Lanka"
    },
    {
        name: "Tejas Dhote",
        department: "Department of Mechanical Engineering",
        university: "Michigan Technological University",
        location: "USA"
    },
    {
        name: "D. KAYATHRI DEVI",
        department: "Department of Information Technology and Engineering",
        university: "Amity University",
        location: "Uzbekistan"
    },
    
    
    
    
    
    
    
    
];


    return (
        <>
            <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto mt-20 px-3">
                <div className="flex flex-col gap-2  items-center">
                    <h1 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Editorial Board</h1>
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
                        <p className="inter-medium text-lg">Roles and Responsibilities:</p>

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

            <h3 className="hanuman-semibold bg-gradient-to-b from-[#E0048B] to-[#83268E] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-center lg:mt-10 mt-5">Our Distinguished Editorial Board</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:mt-10 mt-5 xl:max-w-[1250px] md:max-w-[1200px] mx-auto p-5">
            {editors.map((editor, index) => (
                <div key={index} className="p-[2px] rounded-2xl bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                    <div className="bg-white p-5 rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-3 items-center">
                            {/* <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] p-5 rounded-full">
                                <img src="/assets/images/User.png" alt="User" className='w-30 h-32' />
                            </div> */}
                            <p className="inter-medium text-2xl text-black">Dr.  {editor.name}</p>
                            {/* <div className="p-[2px] rounded-md bg-gradient-to-b from-[#E0048B] to-[#83268E]">
                                <div className="bg-white p-1 rounded-sm overflow-hidden">{editor.role}</div>
                            </div> */}
                        </div>
                        <div className="flex flex-col gap-2 mt-3">   
                          {(editor.department &&
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                               <span className='inter-semibold text-md text-gray-900'>Department    :</span> {editor.department}
                            </p>    
)}                   
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify ">
                               <span className='inter-semibold text-md text-gray-900'>University    :</span> {editor.university}
                            </p>
                            <div className="flex gap-2">
                                <div className='text-gray-600'>
                                    <span className='inter-semibold text-md text-gray-900'>Country    :</span> {editor.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
