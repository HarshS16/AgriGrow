// import React, { useState } from 'react';

// const ManurePage = () => {
//     const [selectedCrop, setSelectedCrop] = useState('');
//     const [fertilizers, setFertilizers] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const crops = [
//         "Corn", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato", "Lettuce"
//     ];

//     const fetchFertilizers = async () => {
//         if (!selectedCrop) {
//             alert("Please select a crop.");
//             return;
//         }

//         setLoading(true);
//         setError('');

//         const queryPayload = {
//             query: selectedCrop,  // Assuming the API expects 'query' here
//         };

//         try {
//             const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(queryPayload),
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
//             }

//             const data = await res.json();
//             console.log("API Response Data:", data);  // Log the entire response to inspect its structure

//             // Check if the result is available and set it as the response
//             if (data.result) {
//                 setFertilizers(data.result);  // Display the result string (e.g., recommendations)
//             } else {
//                 setError("No recommendations found for this crop.");
//             }
//         } catch (err) {
//             console.error("Error fetching fertilizers:", err);
//             setError(`Error fetching fertilizers: ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
//             <p className="mt-4 text-lg text-gray-700">
//                 Select a crop from the dropdown to get recommendations.
//             </p>

//             <div className="mt-6">
//                 <label htmlFor="crop" className="block text-lg font-medium text-gray-700">
//                     Select Crop:
//                 </label>
//                 <select
//                     id="crop"
//                     className="mt-2 p-2 border border-gray-300 rounded-md"
//                     value={selectedCrop}
//                     onChange={(e) => setSelectedCrop(e.target.value)}
//                 >
//                     <option value="">--Select a Crop--</option>
//                     {crops.map((crop) => (
//                         <option key={crop} value={crop}>
//                             {crop}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <button
//                 onClick={fetchFertilizers}
//                 className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : "Get Recommendations"}
//             </button>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {fertilizers && (
//                 <div className="mt-6">
//                     <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
//                     <p className="mt-4 text-lg text-gray-700">{fertilizers}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManurePage;



// import React, { useState } from 'react';

// const ManurePage = () => {
//     const [selectedCrop, setSelectedCrop] = useState('');
//     const [fertilizers, setFertilizers] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const crops = [
//         "Corn", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato", "Lettuce"
//     ];

//     const fetchFertilizers = async () => {
//         if (!selectedCrop) {
//             alert("Please select a crop.");
//             return;
//         }

//         setLoading(true);
//         setError('');

//         // Custom prompt to be included in the search query
//         const customPrompt = `You are an agricultural expert. You need to tell the following details about the crop given to you -

// 1) Crop intro - Add a small very basic intro about the crop.
// 2) Nutritional Requirements - Add nutrition related information which needs to be fed to this crop for good health and take care.
// 3) Manure and Fertilizers - Give names of some manures, fertilizers, pesticides and insectides which should be used on this crop
// 4) Possible Risks - Give a list of some possible risks which are possible to happen with this crop
// 5) Safety Precautions -  List some safety precautions which needs to be taken care of which growing this crop. ${selectedCrop}.`;

//         // The payload to be sent to the API includes the custom prompt
//         const queryPayload = {
//             query: customPrompt,  // Use the custom prompt here
//         };

//         try {
//             const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(queryPayload),
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
//             }

//             const data = await res.json();
//             console.log("API Response Data:", data);  // Log the entire response to inspect its structure

//             // Check if the result is available and set it as the response
//             if (data.result) {
//                 setFertilizers(data.result);  // Display the result string (e.g., recommendations)
//             } else {
//                 setError("No recommendations found for this crop.");
//             }
//         } catch (err) {
//             console.error("Error fetching fertilizers:", err);
//             setError(`Error fetching fertilizers: ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
//             <p className="mt-4 text-lg text-gray-700">
//                 Select a crop from the dropdown to get recommendations.
//             </p>

//             <div className="mt-6">
//                 <label htmlFor="crop" className="block text-lg font-medium text-gray-700">
//                     Select Crop:
//                 </label>
//                 <select
//                     id="crop"
//                     className="mt-2 p-2 border border-gray-300 rounded-md"
//                     value={selectedCrop}
//                     onChange={(e) => setSelectedCrop(e.target.value)}
//                 >
//                     <option value="">--Select a Crop--</option>
//                     {crops.map((crop) => (
//                         <option key={crop} value={crop}>
//                             {crop}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <button
//                 onClick={fetchFertilizers}
//                 className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : "Get Recommendations"}
//             </button>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {fertilizers && (
//                 <div className="mt-6">
//                     <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
//                     <p className="mt-4 text-lg text-gray-700">{fertilizers}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManurePage;/

// import React, { useState } from 'react';

// const ManurePage = () => {
//     const [selectedCrop, setSelectedCrop] = useState('');
//     const [fertilizers, setFertilizers] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const crops = [
//         "Maize", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato","Cotton"," Onion","Sugarcane"
//     ];

//     const fetchFertilizers = async () => {
//         if (!selectedCrop) {
//             alert("Please select a crop.");
//             return;
//         }

//         setLoading(true);
//         setError('');

//         // Custom prompt to be included in the search query
//         const customPrompt = `
//             You are an agricultural expert. You need to tell the following details about the crop given to you:
            
//             1) Crop intro - Add a small, basic intro about the crop.
//             2) Nutritional Requirements - Add nutrition-related information which needs to be fed to this crop for good health and care.
//             3) Manure and Fertilizers - Give names of some manures, fertilizers, pesticides, and insecticides which should be used on this crop.
//             4) Possible Risks - List some possible risks that could happen with this crop.
//             5) Safety Precautions - List some safety precautions to take while growing this crop.
//             ${selectedCrop}
//         `;

//         // The payload to be sent to the API includes the custom prompt
//         const queryPayload = {
//             query: customPrompt,  // Use the custom prompt here
//         };

//         try {
//             const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(queryPayload),
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
//             }

//             const data = await res.json();
//             console.log("API Response Data:", data);  // Log the entire response to inspect its structure

//             // Check if the result is available and set it as the response
//             if (data.result) {
//                 // Summarize the response to be within 150 words
//                 setFertilizers(data.result.trim().slice(0, 150));  // Summarize the response to 150 words
//             } else {
//                 setError("No recommendations found for this crop.");
//             }
//         } catch (err) {
//             console.error("Error fetching fertilizers:", err);
//             setError(`Error fetching fertilizers: ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6 flex flex-col items-center ">
//             <h1 className="text-3xl font-bold text-green-700">Manure for Crops</h1>
//             <p className="mt-4 text-lg text-gray-700 text-center">
//                 Select a crop from the dropdown  to get recommendations about the nutritional requirements, manure and fertilizers and possible risks for a crop.
//             </p>

//             <div className="mt-6">
//                 <label htmlFor="crop" className="block text-lg font-medium text-gray-700 text-center">
//                     Select Crop:
//                 </label>
//                 <select
//                     id="crop"
//                     className="mt-2 p-2 border border-gray-300 rounded-md"
//                     value={selectedCrop}
//                     onChange={(e) => setSelectedCrop(e.target.value)}
//                 >
//                     <option value="">--Select a Crop--</option>
//                     {crops.map((crop) => (
//                         <option key={crop} value={crop}>
//                             {crop}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <button
//                 onClick={fetchFertilizers}
//                 className="mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 disabled={loading}
//             >
//                 {loading ? "Loading..." : "Get Recommendations"}
//             </button>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {fertilizers && (
//                 <div className="mt-6">
//                     <h2 className="text-2xl font-semibold text-green-600">Recommendations</h2>
//                     <div className="mt-4 text-lg text-gray-700">
//                         <ul className="list-disc pl-6">
//                             <li><strong>Crop Intro:</strong> {fertilizers}</li>
//                             <li><strong>Nutritional Requirements:</strong> {fertilizers}</li>
//                             <li><strong>Manure and Fertilizers:</strong> {fertilizers}</li>
//                             <li><strong>Possible Risks:</strong> {fertilizers}</li>
//                             <li><strong>Safety Precautions:</strong> {fertilizers}</li>
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManurePage;

import React, { useState } from 'react'; import { motion } from 'framer-motion'; import { FaLeaf, FaSeedling, FaBug, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';

const ManurePage = () => { const [selectedCrop, setSelectedCrop] = useState(''); const [fertilizers, setFertilizers] = useState(''); const [loading, setLoading] = useState(false); const [error, setError] = useState('');
    const crops = [
        "Maize", "Wheat", "Rice", "Soybean", "Tomato", "Cucumber", "Potato", "Cotton", "Onion", "Sugarcane",
        "Bajra", "Turmeric", "Groundnut", "Mustard", "Chili", "Brinjal", "Banana", "Moong", "Pomegranate", "Jowar"
    ];
    
    const fetchFertilizers = async () => {
        if (!selectedCrop) {
            alert("🌱 Please select a crop.");
            return;
        }
    
        setLoading(true);
        setError('');
    
        const customPrompt = `
            You are an agricultural expert. You need to tell the following details about the crop given to you:
            1) Crop intro - Add a small, basic intro about the crop.
            2) Nutritional Requirements - Add nutrition-related information which needs to be fed to this crop for good health and care.
            3) Manure and Fertilizers - Give names of some manures, fertilizers, pesticides, and insecticides which should be used on this crop.
            4) Possible Risks - List some possible risks that could happen with this crop.
            5) Safety Precautions - List some safety precautions to take while growing this crop.
            ${selectedCrop}
        `;
    
        const queryPayload = {
            query: customPrompt,
        };
    
        try {
            const res = await fetch("https://agriback-mj37.onrender.com/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(queryPayload),
            });
    
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to fetch fertilizers. Status: ${res.status}, Message: ${errorText}`);
            }
    
            const data = await res.json();
    
            if (data.result) {
                setFertilizers(data.result.trim().slice(0, 150));
            } else {
                setError("No recommendations found for this crop.");
            }
        } catch (err) {
            setError(`Error fetching fertilizers: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="p-6 flex flex-col items-center bg-green-50 min-h-screen">
            <motion.h1
                className="text-4xl font-extrabold text-green-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                🌾 Manure & Crop Guide
            </motion.h1>
    
            <motion.p
                className="mt-4 text-lg text-gray-700 text-center max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Select a 🌱 crop from the dropdown to get recommendations about its care, manure, risks, and more!
            </motion.p>
    
            <motion.div
                className="mt-6 w-full max-w-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <label htmlFor="crop" className="block text-lg font-medium text-gray-700 text-center">
                    🧑‍🌾 Choose Your Crop:
                </label>
                <select
                    id="crop"
                    className="mt-2 p-3 border border-green-300 rounded-md w-full bg-white shadow-sm"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                >
                    <option value="">-- Select a Crop --</option>
                    {crops.map((crop) => (
                        <option key={crop} value={crop}>
                            {crop}
                        </option>
                    ))}
                </select>
            </motion.div>
    
            <motion.button
                onClick={fetchFertilizers}
                className="mt-6 p-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {loading ? "🌿 Loading..." : "🚜 Get Recommendations"}
            </motion.button>
    
            {error && (
                <motion.p
                    className="mt-4 text-red-600 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    ❌ {error}
                </motion.p>
            )}
    
            {fertilizers && (
                <motion.div
                    className="mt-10 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-green-700 mb-4">🌟 Expert Recommendations</h2>
                    <ul className="space-y-3 text-gray-700 text-lg">
                        <li><FaSeedling className="inline text-green-500 mr-2" /> <strong>Crop Intro:</strong> {fertilizers}</li>
                        <li><FaLeaf className="inline text-green-500 mr-2" /> <strong>Nutritional Requirements:</strong> {fertilizers}</li>
                        <li><FaBug className="inline text-green-500 mr-2" /> <strong>Manure & Fertilizers:</strong> {fertilizers}</li>
                        <li><FaExclamationTriangle className="inline text-yellow-500 mr-2" /> <strong>Possible Risks:</strong> {fertilizers}</li>
                        <li><FaShieldAlt className="inline text-blue-500 mr-2" /> <strong>Safety Precautions:</strong> {fertilizers}</li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default ManurePage;    