// import { useState } from "react";
// import { motion } from "framer-motion";

// const ExpertsPage = () => {
//     // Random experts data
//     const experts = [
//         {
//             _id: "1",
//             name: "John Doe",
//             profession: "Agronomist",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQQ0lKviAx8hg3Q0KWTpfsuRQg_5PFrFpzg&s"
//         },
//         {
//             _id: "2",
//             name: "Jane Smith",
//             profession: "Horticulturist",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s"
//         },
//         {
//             _id: "3",
//             name: "Sam Wilson",
//             profession: "Entomologist",
//             image: "https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg"
//         },
//         {
//             _id: "4",
//             name: "Emily Davis",
//             profession: "Soil Scientist",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkoXDY3bU7DweqPS20T11LyFjcXgGiCIxtSt6Ge7Y6GKU1dzLw9PFZg6opGSmlcdVwVs&usqp=CAU"
//         },
//         {
//             _id: "5",
//             name: "Michael Brown",
//             profession: "Plant Pathologist",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieLvUXoA0oRQwscvW_2NNih5-NVuXYUdkEQ&s"
//         },
//         {
//             _id: "6",
//             name: "Sarah Lee",
//             profession: "Agricultural Engineer",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw-sz_ynsO6fK1gee7Kz13-xZHInABzJrXw&s"
//         }
//     ];

//     return (
//         <div className="container mx-auto p-6">
//             {/* Title */}
//             <h1 className="text-2xl font-bold mb-6">Our Experts</h1>
            
//             {/* Grid of Expert Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                 {experts.map((expert) => (
//                     <motion.div
//                         key={expert._id}
//                         className="bg-white border rounded-lg shadow-md p-4 text-center"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, ease: "easeOut" }}
//                         whileHover={{
//                             scale: 1.05,
//                             boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
//                             backgroundColor: "#f9fafb"
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         <img
//                             src={expert.image}
//                             alt={expert.name}
//                             className="w-28 h-28 mx-auto rounded-full object-cover transition-transform duration-300 ease-in-out"
//                         />
//                         <h3 className="mt-4 font-semibold text-lg">{expert.name}</h3>
//                         <p className="text-sm text-gray-600">{expert.profession}</p>
                        
//                         {/* Book Appointment Button */}
//                         <motion.button
//                             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:bg-green-500 hover:cursor-pointer focus:outline-none"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Book Appointment
//                         </motion.button>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ExpertsPage;


// import { useState } from "react"; 
// import { motion } from "framer-motion";

// const ExpertsPage = () => {
//     // Updated experts data with Indian names and images
//     const experts = [
//         {
//             _id: "1",
//             name: "Amit Sharma",
//             profession: "Agronomist",
//             image: "https://images.pexels.com/photos/7717416/pexels-photo-7717416.jpeg"
//         },
//         {
//             _id: "2",
//             name: "Priya Singh",
//             profession: "Horticulturist",
//             image: "https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg"
//         },
//         {
//             _id: "3",
//             name: "Ravi Kumar",
//             profession: "Entomologist",
//             image: "https://images.pexels.com/photos/4372681/pexels-photo-4372681.jpeg"
//         },
//         {
//             _id: "4",
//             name: "Anjali Verma",
//             profession: "Soil Scientist",
//             image: "https://images.pexels.com/photos/3184137/pexels-photo-3184137.jpeg"
//         },
//         {
//             _id: "5",
//             name: "Vikram Patel",
//             profession: "Plant Pathologist",
//             image: "https://images.pexels.com/photos/4372681/pexels-photo-4372681.jpeg"
//         },
//         {
//             _id: "6",
//             name: "Simran Kaur",
//             profession: "Agricultural Engineer",
//             image: "https://images.pexels.com/photos/1252870/pexels-photo-1252870.jpeg"
//         }
//     ];

//     return (
//         <div className="container mx-auto p-6">
//             {/* Title */}
//             <h1 className="text-2xl font-bold mb-6">Our Experts</h1>
            
//             {/* Grid of Expert Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                 {experts.map((expert) => (
//                     <motion.div
//                         key={expert._id}
//                         className="bg-white border rounded-lg shadow-md p-4 text-center"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, ease: "easeOut" }}
//                         whileHover={{
//                             scale: 1.05,
//                             boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
//                             backgroundColor: "#f9fafb"
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         <img
//                             src={expert.image}
//                             alt={expert.name}
//                             className="w-28 h-28 mx-auto rounded-full object-cover transition-transform duration-300 ease-in-out"
//                         />
//                         <h3 className="mt-4 font-semibold text-lg">{expert.name}</h3>
//                         <p className="text-sm text-gray-600">{expert.profession}</p>
                        
//                         {/* Book Appointment Button */}
//                         <motion.button
//                             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:bg-green-500 hover:cursor-pointer focus:outline-none"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Book Appointment
//                         </motion.button>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ExpertsPage;


import { useState } from "react";
import { motion } from "framer-motion";

const ExpertsPage = () => {
  const experts = [
    {
      _id: "1",
      name: "Amit Sharma",
      profession: "Agronomist",
      image: "https://images.pexels.com/photos/7717416/pexels-photo-7717416.jpeg"
    },
    {
      _id: "2",
      name: "Priya Singh",
      profession: "Horticulturist",
      image: "https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg"
    },
    {
      _id: "3",
      name: "Ravi Kumar",
      profession: "Entomologist",
      image: "https://images.pexels.com/photos/4372681/pexels-photo-4372681.jpeg"
    },
    {
      _id: "4",
      name: "Anjali Verma",
      profession: "Soil Scientist",
      image: "https://images.pexels.com/photos/3184137/pexels-photo-3184137.jpeg"
    },
    {
      _id: "5",
      name: "Vikram Patel",
      profession: "Plant Pathologist",
      image: "https://images.pexels.com/photos/4372681/pexels-photo-4372681.jpeg"
    },
    {
      _id: "6",
      name: "Simran Kaur",
      profession: "Agricultural Engineer",
      image: "https://images.pexels.com/photos/1252870/pexels-photo-1252870.jpeg"
    }
  ];

  const [selectedExpert, setSelectedExpert] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    preferredTime: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked with:", selectedExpert);
    console.log("Form data:", formData);
    // Add API call here
    setSelectedExpert(null);
    setFormData({ name: "", contact: "", preferredTime: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Experts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <motion.div
            key={expert._id}
            className="bg-white border rounded-lg shadow-md p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9fafb"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold text-lg">{expert.name}</h3>
            <p className="text-sm text-gray-600">{expert.profession}</p>

            <motion.button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-500 transition"
              onClick={() => setSelectedExpert(expert)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
          </motion.div>
        ))}
      </div>

      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-xl font-bold mb-4">Book Appointment with {selectedExpert.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact (Phone or Email)"
                required
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.contact}
                onChange={handleChange}
              />
              <input
                type="datetime-local"
                name="preferredTime"
                required
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.preferredTime}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Additional Message (Optional)"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                  onClick={() => setSelectedExpert(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExpertsPage;

