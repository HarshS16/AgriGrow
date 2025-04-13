// import { useState } from "react";

// const Analyze = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [message, setMessage] = useState("");

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Preview the image
//         }
//     };

//     const handleUpload = async () => {
//         if (!image) {
//             setMessage("Please select an image.");
//             return;
//         }

//         setUploading(true);
//         setMessage("");

//         const formData = new FormData();
//         formData.append("image", image);

//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch("https://agriback-mj37.onrender.com/api/upload", {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//                 body: formData,
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 throw new Error(data.error || "Failed to upload image.");
//             }

//             setMessage("Image uploaded successfully! Your report is being processed.");
//         } catch (error) {
//             setMessage(error.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="bg-blue-50 min-h-screen p-6">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Image</h1>

//             <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
//                 <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

//                 {preview && (
//                     <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-4" />
//                 )}

//                 <button
//                     onClick={handleUpload}
//                     disabled={uploading}
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                 >
//                     {uploading ? "Uploading..." : "Submit for Analysis"}
//                 </button>

//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Analyze;




// import { useState } from "react";

// const Analyze = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [message, setMessage] = useState("");

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Show image preview
//         }
//     };

//     const handleUpload = async (model = "farmer") => {
//         if (!image) {
//             setMessage("Please select an image.");
//             return;
//         }

//         setUploading(true);
//         setMessage("");

//         const formData = new FormData();
//         formData.append("image", image);

//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch(`https://agriback-mj37.onrender.com/api/upload/${model}`, {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//                 body: formData,
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 throw new Error(data.error || "Failed to upload image.");
//             }

//             setMessage(`Image uploaded successfully and analyzed using ${model === "cow" ? "Cow Model 🐄" : "Farmer Model 🌱"} : Check detailed report at Dashboard`);
//         } catch (error) {
//             setMessage(error.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="bg-blue-50 min-h-screen p-6">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Image</h1>

//             <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
//                 <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4 cursor-pointer" />

//                 {preview && (
//                     <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-4" />
//                 )}

//                 <div className="flex gap-4">
//                     <button
//                         onClick={() => handleUpload("farmer")}
//                         disabled={uploading}
//                         className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                     >
//                         {uploading ? "Uploading..." : "Analyze with Farmer Model 🌱"}
//                     </button>

//                     <button
//                         onClick={() => handleUpload("cow")}
//                         disabled={uploading}
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                     >
//                         {uploading ? "Uploading..." : "Analyze with Cattle Model 🐄"}
//                     </button>
//                 </div>

//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Analyze;

// import { useState } from "react";

// const Analyze = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [message, setMessage] = useState("");

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Preview the image
//         }
//     };

//     const handleUpload = async () => {
//         if (!image) {
//             setMessage("Please select an image.");
//             return;
//         }

//         setUploading(true);
//         setMessage("");

//         const formData = new FormData();
//         formData.append("image", image);

//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch("https://agriback-mj37.onrender.com/api/upload", {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//                 body: formData,
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 throw new Error(data.error || "Failed to upload image.");
//             }

//             setMessage("Image uploaded successfully! Your report is being processed.");
//         } catch (error) {
//             setMessage(error.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="bg-blue-50 min-h-screen p-6">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Image</h1>

//             <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
//                 <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

//                 {preview && (
//                     <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-4" />
//                 )}

//                 <button
//                     onClick={handleUpload}
//                     disabled={uploading}
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                 >
//                     {uploading ? "Uploading..." : "Submit for Analysis"}
//                 </button>

//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Analyze;




// import { useState } from "react";

// const Analyze = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [message, setMessage] = useState("");

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Show image preview
//         }
//     };

//     const handleUpload = async (model = "farmer") => {
//         if (!image) {
//             setMessage("Please select an image.");
//             return;
//         }

//         setUploading(true);
//         setMessage("");

//         const formData = new FormData();
//         formData.append("image", image);

//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch(`https://agriback-mj37.onrender.com/api/upload/${model}`, {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//                 body: formData,
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 throw new Error(data.error || "Failed to upload image.");
//             }

//             setMessage(`Image uploaded successfully and analyzed using ${model === "cow" ? "Cow Model 🐄" : "Farmer Model 🌱"}`);
//         } catch (error) {
//             setMessage(error.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="bg-blue-50 min-h-screen p-6">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Image</h1>

//             <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
//                 <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

//                 {preview && (
//                     <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-4" />
//                 )}

//                 <div className="flex gap-4">
//                     <button
//                         onClick={() => handleUpload("farmer")}
//                         disabled={uploading}
//                         className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                     >
//                         {uploading ? "Uploading..." : "Analyze with Farmer Model 🌱"}
//                     </button>

//                     <button
//                         onClick={() => handleUpload("cow")}
//                         disabled={uploading}
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                     >
//                         {uploading ? "Uploading..." : "Analyze with Cow Model 🐄"}
//                     </button>
//                 </div>

//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Analyze;




// import { useState, useRef } from "react";
// import { Camera } from "lucide-react";

// const Analyze = () => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [message, setMessage] = useState("");
//     const [showCamera, setShowCamera] = useState(false);
//     const fileInputRef = useRef(null);
//     const videoRef = useRef(null);
//     const streamRef = useRef(null);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // Show image preview
//         }
//     };

//     const handleUpload = async (model = "farmer") => {
//         if (!image) {
//             setMessage("Please select an image.");
//             return;
//         }
//         setUploading(true);
//         setMessage("");
//         const formData = new FormData();
//         formData.append("image", image);
//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch(`https://agriback-mj37.onrender.com/api/upload/${model}`, {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//                 body: formData,
//             });
//             const data = await res.json();
//             if (!res.ok) {
//                 throw new Error(data.error || "Failed to upload image.");
//             }
//             setMessage(`Image uploaded successfully and analyzed using ${model === "cow" ? "Cow Model 🐄" : "Farmer Model 🌱"}`);
//         } catch (error) {
//             setMessage(error.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     const startCamera = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             videoRef.current.srcObject = stream;
//             streamRef.current = stream;
//             setShowCamera(true);
//         } catch (err) {
//             setMessage("Error accessing camera: " + err.message);
//         }
//     };

//     const stopCamera = () => {
//         if (streamRef.current) {
//             const tracks = streamRef.current.getTracks();
//             tracks.forEach(track => track.stop());
//             streamRef.current = null;
//         }
//         setShowCamera(false);
//     };

//     const capturePhoto = () => {
//         const video = videoRef.current;
//         const canvas = document.createElement('canvas');
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        
//         // Convert canvas to file
//         canvas.toBlob((blob) => {
//             const file = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });
//             setImage(file);
//             setPreview(URL.createObjectURL(file));
//             stopCamera();
//         }, 'image/jpeg');
//     };

//     return (
//         <div className="bg-blue-50 min-h-screen p-6 relative">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analyze Image</h1>
//             <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto">
//                 {showCamera ? (
//                     <div className="mb-4">
//                         <video 
//                             ref={videoRef} 
//                             autoPlay 
//                             className="w-full h-64 object-cover rounded-md"
//                         ></video>
//                         <div className="flex justify-center gap-4 mt-4">
//                             <button 
//                                 onClick={capturePhoto}
//                                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                             >
//                                 Take Photo
//                             </button>
//                             <button 
//                                 onClick={stopCamera}
//                                 className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         <input 
//                             type="file" 
//                             accept="image/*" 
//                             onChange={handleFileChange} 
//                             className="mb-4" 
//                             ref={fileInputRef}
//                         />
//                         {preview && (
//                             <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-4" />
//                         )}
//                         <div className="flex gap-4">
//                             <button
//                                 onClick={() => handleUpload("farmer")}
//                                 disabled={uploading}
//                                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//                             >
//                                 {uploading ? "Uploading..." : "Analyze with Farmer Model 🌱"}
//                             </button>
//                             <button
//                                 onClick={() => handleUpload("cow")}
//                                 disabled={uploading}
//                                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                             >
//                                 {uploading ? "Uploading..." : "Analyze with Cow Model 🐄"}
//                             </button>
//                         </div>
//                     </>
//                 )}
//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//             </div>
            
//             {/* Camera button in bottom right */}
//             {!showCamera && (
//                 <button 
//                     onClick={startCamera}
//                     className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
//                     aria-label="Open Camera"
//                 >
//                     <Camera size={24} />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Analyze;


import { useState, useRef } from "react";
import { Camera, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";

const Analyze = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (model = "farmer") => {
    if (!image) {
      setMessage("Please select an image.");
      return;
    }
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("image", image);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://agriback-mj37.onrender.com/api/upload/${model}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload image.");
      }
      setMessage(
        `✅ Image analyzed using ${
          model === "cow" ? "Cow Model 🐄" : "Farmer Model 🌱"
        }`
      );
    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setShowCamera(true);
    } catch (err) {
      setMessage("Error accessing camera: " + err.message);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const file = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });
      setImage(file);
      setPreview(URL.createObjectURL(file));
      stopCamera();
    }, "image/jpeg");
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6 relative">
      <motion.h1
        className="text-3xl font-bold text-center text-green-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌾 Analyze Your Image
      </motion.h1>

      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {showCamera ? (
          <div className="mb-4">
            <video
              ref={videoRef}
              autoPlay
              className="w-full h-64 object-cover rounded-md border"
            />
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={capturePhoto}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                📸 Take Photo
              </button>
              <button
                onClick={stopCamera}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <label className="flex items-center gap-2 mb-4 text-blue-700 font-medium cursor-pointer">
              <ImagePlus />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
              Upload an image
            </label>

            {preview && (
              <motion.div
                className="mb-4 rounded-md overflow-hidden shadow border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleUpload("farmer")}
                disabled={uploading}
                className="bg-green-600 w-full text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                {uploading ? "Uploading..." : "Analyze with Farmer 🌱"}
              </button>
              <button
                onClick={() => handleUpload("cow")}
                disabled={uploading}
                className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {uploading ? "Uploading..." : "Analyze with Cow 🐄"}
              </button>
            </div>
          </>
        )}
        {message && (
          <motion.p
            className="mt-4 text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>

      {!showCamera && (
        <button
          onClick={startCamera}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Open Camera"
        >
          <Camera size={24} />
        </button>
      )}
    </div>
  );
};

export default Analyze;

