// import React from 'react';

// const EducationalSupportPage = () => {
//     return (
//         <div className="p-8 max-w-7xl mx-auto">
//             {/* Title */}
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center">Educational Support</h1>
//             <p className="text-lg text-gray-700 mb-10 text-center">
//                 Here you can find information about various educational programs and resources for farmers. We offer training, online courses, and workshops to improve farming skills.
//             </p>

//             {/* Flex container to align cards horizontally and vertically */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
//                 {/* Agriculture Training Program Section with Playlist Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Agriculture Training Program</h3>
//                         <p className="mt-3 text-gray-600">Learn essential farming skills and techniques through government-backed training programs.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Playlist */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/videoseries?list=PLUMkTocemlhJhSo7Lw8wnQ9RWE1_IsnZR"
//                                 title="Agriculture Training Playlist"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
//                     </div>
//                 </div>

//                 {/* Online Courses Section with Playlist Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Online Courses for Farmers</h3>
//                         <p className="mt-3 text-gray-600">Take part in online courses to improve your farming knowledge and skills.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Playlist */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/videoseries?list=PLs9JmqSMwHtowWoWzjmq0YCDpx-33_rJt"
//                                 title="Online Courses Playlist"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Explore Courses</a>
//                     </div>
//                 </div>

//                 {/* Workshops Section with Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Farmer Workshops</h3>
//                         <p className="mt-3 text-gray-600">Join workshops and seminars organized to help farmers stay up to date with new techniques and technologies.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Video */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/QeWZPvi-xBE"
//                                 title="Farmer Workshops Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Find a Workshop</a>
//                     </div>
//                 </div>

//                 {/* Mentorship Program Section with Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Farmer Mentorship Program</h3>
//                         <p className="mt-3 text-gray-600">Get personalized guidance and mentorship from experienced farmers and agricultural experts.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Playlist */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/videoseries?list=PLrJY_OW9rmRS3TJNLOG_haAd4_i9OE_FA"
//                                 title="Farmer Mentorship Playlist"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Join Mentorship</a>
//                     </div>
//                 </div>

//                 {/* Grants and Financial Aid Section with Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Grants & Financial Aid</h3>
//                         <p className="mt-3 text-gray-600">Access resources to apply for grants and financial aid programs for farmers.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Video */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/rVHCrZ-GDFk"
//                                 title="Grants and Financial Aid Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
//                     </div>
//                 </div>

//                 {/* Sustainable Farming Section with Embed */}
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-xs">
//                     <div className="p-6">
//                         <h3 className="text-2xl font-semibold text-indigo-600">Sustainable Farming Practices</h3>
//                         <p className="mt-3 text-gray-600">Understand the principles and practices of sustainable farming to protect the environment and increase productivity.</p>
//                         <div className="mt-4">
//                             {/* Embed YouTube Video */}
//                             <iframe
//                                 className="w-full h-64 rounded-lg"
//                                 src="https://www.youtube.com/embed/nNP4o1wE6Vo"
//                                 title="Sustainable Farming Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                         <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Learn More</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EducationalSupportPage;


import React from "react"; import { motion } from "framer-motion"; import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaHandHoldingUsd, FaSeedling, FaComments } from "react-icons/fa";

const programs = [ { title: "Agriculture Training Program 🌱", description: "Learn essential farming skills and techniques through government-backed training programs.", icon: <FaChalkboardTeacher className="text-green-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/videoseries?list=PLUMkTocemlhJhSo7Lw8wnQ9RWE1_IsnZR", cta: "Learn More" }, { title: "Online Courses for Farmers 💻", description: "Take part in online courses to improve your farming knowledge and skills.", icon: <FaLaptopCode className="text-blue-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/videoseries?list=PLs9JmqSMwHtowWoWzjmq0YCDpx-33_rJt", cta: "Explore Courses" }, { title: "Farmer Workshops 🧑‍🌾", description: "Join workshops and seminars organized to help farmers stay up to date with new techniques and technologies.", icon: <FaUsers className="text-purple-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/QeWZPvi-xBE", cta: "Find a Workshop" }, { title: "Farmer Mentorship Program 🤝", description: "Get personalized guidance and mentorship from experienced farmers and agricultural experts.", icon: <FaComments className="text-indigo-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/videoseries?list=PLrJY_OW9rmRS3TJNLOG_haAd4_i9OE_FA", cta: "Join Mentorship" }, { title: "Grants & Financial Aid 💰", description: "Access resources to apply for grants and financial aid programs for farmers.", icon: <FaHandHoldingUsd className="text-yellow-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/rVHCrZ-GDFk", cta: "Learn More" }, { title: "Sustainable Farming Practices 🌾", description: "Understand sustainable farming to protect the environment and increase productivity.", icon: <FaSeedling className="text-emerald-600 text-3xl mb-2" />, src: "https://www.youtube.com/embed/nNP4o1wE6Vo", cta: "Learn More" } ];

const EducationalSupportPage = () => { return ( <motion.div className="p-8 max-w-7xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} > {/* Title */} <motion.h1 className="text-4xl font-extrabold text-center text-green-800 mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} > 📚 Educational Support for Farmers </motion.h1> <motion.p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} > Unlock your potential with training, courses, and mentorship tailored to empower India's farmers. Let's grow together! 🌾 </motion.p>
  {/* Grid of Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {programs.map((program, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-all hover:shadow-xl hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        {program.icon}
        <h3 className="text-xl font-semibold text-indigo-700 mb-2 text-center">{program.title}</h3>
        <p className="text-sm text-gray-600 text-center">{program.description}</p>
        <iframe
          className="w-full h-52 mt-4 rounded-md"
          src={program.src}
          title={program.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          href="#"
          className="mt-4 text-blue-600 hover:underline font-medium text-sm"
        >
          {program.cta}
        </a>
      </motion.div>
    ))}
  </div>
</motion.div>
); };

export default EducationalSupportPage;