// // const Header = ({ title }) => {
// //     return (
// //         <header className='sticky top-0 bg-green-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-green-700 z-20 flex justify-center items-center p-8'>
// //             <div className='py-4 px-6'>
// //                 <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
// //             </div>
// //             <div id="google_translate_element"></div>
// //         </header>
// //     );
// // };
// // export default Header;


import { motion } from "framer-motion"; import { useEffect, useState } from "react";

const Header = ({ title }) => { const [date, setDate] = useState("");

useEffect(() => { const today = new Date(); const formattedDate = today.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric", }); setDate(formattedDate); }, []);

return ( <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="sticky top-0 z-50 bg-green-800 bg-opacity-60 backdrop-blur-md border-b border-green-700 shadow-xl" > {/* Top Info Bar */} <div className="flex items-center justify-between px-6 py-2 text-sm text-white bg-green-900 bg-opacity-50"> <span>🌾 Welcome Farmer! | 📅 {date}</span> <div id="google_translate_element" className="ml-4" /> </div>

  {/* Main Header */}
  <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <motion.img
        src="/logo.png"
        alt="Agriscan Logo"
        className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <motion.h1
        className="text-3xl font-bold text-white tracking-wide drop-shadow-md"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </div>
  </div>

  {/* Decorative SVG Wave */}
  <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      className="w-full h-10"
    >
      <path
        d="M0.00,49.98 C150.00,150.00 349.65,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        className="fill-green-800"
      />
    </svg>
  </div>
</motion.header>
); };

export default Header;


// import { motion } from "framer-motion"; import { useEffect, useState } from "react";

// const Header = ({ title }) => { const [date, setDate] = useState("");

// useEffect(() => { const today = new Date(); const formattedDate = today.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric", }); setDate(formattedDate); }, []);

// return ( <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="sticky top-0 z-50 bg-green-800 bg-opacity-60 backdrop-blur-md border-b border-green-700 shadow-xl" > {/* Top Info Bar */} <div className="bg-green-900 bg-opacity-50 text-white text-sm px-4"> <div className="max-w-7xl mx-auto flex items-center justify-between py-1"> <span>🌾 Welcome Farmer! | 📅 {date}</span> <div id="google_translate_element" className="ml-4" /> </div> </div>
//   {/* Main Header */}
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
//     <div className="flex items-center gap-3">
//       <motion.img
//         src="/logo.png"
//         alt="Agriscan Logo"
//         className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
//         whileHover={{ rotate: 10 }}
//         transition={{ type: "spring", stiffness: 200 }}
//       />
//       <motion.h1
//         className="text-2xl font-bold text-white tracking-wide drop-shadow-md"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         {title}
//       </motion.h1>
//     </div>
//   </div>

//   {/* Decorative SVG Wave */}
//   <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
//     <svg
//       viewBox="0 0 500 150"
//       preserveAspectRatio="none"
//       className="w-full h-8"
//     >
//       <path
//         d="M0.00,49.98 C150.00,150.00 349.65,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//         className="fill-green-800"
//       />
//     </svg>
//   </div>
// </motion.header>
// ); };

// export default Header;