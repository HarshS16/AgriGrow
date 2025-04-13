// import { useState } from "react";
// import { motion } from "framer-motion";

// const FinancialAssistancePage = () => {
//     // Sample financial assistance programs
//     const programs = [
//         {
//             _id: "1",
//             name: "Krishi Udyan 2.0",
//             description: "A government initiative to provide financial support to farmers in need.",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz8h62xtkOfyY5qow_xZVprQmTBx6TTJrMw&s"
//         },
//         {
//             _id: "2",
//             name: "Interest Subvention Scheme",
//             description: "Low-interest loans for farmers to help with equipment and operations.",
//             image: "https://currentaffairs.khanglobalstudies.com/wp-content/uploads/2024/07/Interest-28-1-19.jpg"
//         },
//         {
//             _id: "3",
//             name: "PM Fasal Beema Yojana",
//             description: "Grants for farmers adopting environmentally sustainable practices.",
//             image: "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/fasal-bima-yojna-inner.jpg"
//         },
//         {
//             _id: "4",
//             name: "PM Krishi Sinchai Yojana",
//             description: "Insurance programs to protect against crop loss due to adverse weather conditions.",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJrfd56BuvF8CcwDSaEFlrejIeREh_oIh1Q&s"
//         },
//         {
//             _id: "5",
//             name: "Namo Drone Didi",
//             description: "Subsidy for farmers to adopt modern technology for farming operations.",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMtAoMPEJ4VKxIJ7bE69kK1kthunX5bJR7g&s"
//         },
//         {
//             _id: "6",
//             name: "PM Kisan Samman Nidhi",
//             description: "Funding for projects to improve water usage efficiency in farming.",
//             image: "https://images.bhaskarassets.com/web2images/521/2023/09/30/1763725-pm-kisan-samman-nidhi-yojana_1696066951.jpg"
//         }
//     ];

//     return (
//         <div className="container mx-auto p-6">
//             {/* Title */}
//             <h1 className="text-2xl font-bold mb-6 text-center">Financial Assistance Programs</h1>

//             {/* Grid of Financial Assistance Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                 {programs.map((program) => (
//                     <motion.div
//                         key={program._id}
//                         className="bg-white border rounded-lg shadow-lg p-4 text-center"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, ease: "easeOut" }}
//                         whileHover={{
//                             scale: 1.05,
//                             boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
//                             backgroundColor: "#f9fafb"
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         {/* Image Layout - Rectangular */}
//                         <div className="w-full h-48 mb-4 overflow-hidden shadow-xl">
//                             <img
//                                 src={program.image}
//                                 alt={program.name}
//                                 className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
//                             />
//                         </div>
//                         <h3 className="mt-4 font-semibold text-lg">{program.name}</h3>
//                         <p className="text-sm text-gray-600">{program.description}</p>

//                         {/* Apply for Program Button */}
//                         <motion.button
//                             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:bg-green-500 hover:cursor-pointer focus:outline-none"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                            <a href="https://upagripardarshi.gov.in/Index.aspx">Learn More</a> 
//                         </motion.button>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FinancialAssistancePage;


import { motion } from "framer-motion"; import { FaRupeeSign, FaTractor, FaLeaf, FaHandsHelping, FaShieldAlt, FaWater } from "react-icons/fa";

const FinancialAssistancePage = () => { const programs = [ { _id: "1", name: "Krishi Udyan 2.0", description: "🌾 A government initiative to provide financial support to farmers in need.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz8h62xtkOfyY5qow_xZVprQmTBx6TTJrMw&s", icon: <FaHandsHelping className="text-green-600 text-2xl inline-block mr-2" /> }, { _id: "2", name: "Interest Subvention Scheme", description: "💰 Low-interest loans for farmers to help with equipment and operations.", image: "https://currentaffairs.khanglobalstudies.com/wp-content/uploads/2024/07/Interest-28-1-19.jpg", icon: <FaRupeeSign className="text-blue-600 text-2xl inline-block mr-2" /> }, { _id: "3", name: "PM Fasal Beema Yojana", description: "🌱 Grants for farmers adopting environmentally sustainable practices.", image: "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/fasal-bima-yojna-inner.jpg", icon: <FaShieldAlt className="text-orange-500 text-2xl inline-block mr-2" /> }, { _id: "4", name: "PM Krishi Sinchai Yojana", description: "🚿 Insurance programs to protect against crop loss due to adverse weather conditions.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJrfd56BuvF8CcwDSaEFlrejIeREh_oIh1Q&s", icon: <FaWater className="text-blue-500 text-2xl inline-block mr-2" /> }, { _id: "5", name: "Namo Drone Didi", description: "🚁 Subsidy for farmers to adopt modern technology for farming operations.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMtAoMPEJ4VKxIJ7bE69kK1kthunX5bJR7g&s", icon: <FaTractor className="text-purple-600 text-2xl inline-block mr-2" /> }, { _id: "6", name: "PM Kisan Samman Nidhi", description: "🪙 Direct income support for small and marginal farmers across India.", image: "https://images.bhaskarassets.com/web2images/521/2023/09/30/1763725-pm-kisan-samman-nidhi-yojana_1696066951.jpg", icon: <FaLeaf className="text-green-500 text-2xl inline-block mr-2" /> } ];

return ( <div className="container mx-auto px-4 py-8"> <motion.h1 className="text-3xl font-bold text-center text-green-700 mb-6" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} > 🌿 Financial Assistance Programs for Farmers </motion.h1>

<motion.p
    className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    Empowering our farmers with schemes and subsidies to support innovation, sustainability, and prosperity in agriculture 🚜💸
  </motion.p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {programs.map((program, index) => (
      <motion.div
        key={program._id}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center">
            {program.icon} {program.name}
          </h3>
          <p className="text-sm text-gray-600 mt-2">{program.description}</p>
          <motion.a
            href="https://upagripardarshi.gov.in/Index.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    ))}
  </div>
</div>
); };

export default FinancialAssistancePage;