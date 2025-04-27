// import React, { useState } from "react";
// import axios from "axios";

// const WeatherPage = () => {
//     const [location, setLocation] = useState(null);
//     const [weatherData, setWeatherData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [permissionDenied, setPermissionDenied] = useState(false);

//     const handleGetLocation = () => {
//         // Prompt user to allow location access
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ latitude, longitude });

//                     // Fetch weather data after getting the location
//                     await fetchWeatherData(latitude, longitude);
//                 },
//                 (error) => {
//                     setPermissionDenied(true);
//                     setError("Location access denied. Please enable location services.");
//                 }
//             );
//         } else {
//             setError("Geolocation is not supported by this browser.");
//         }
//     };

//     const fetchWeatherData = async (latitude, longitude) => {
//         setLoading(true);
//         setError(null);

//         const apiKey = "c90813b393c1497c99f50737250604"; // Replace with your WeatherAPI key
//         const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`;

//         try {
//             const response = await axios.get(url);
//             console.log(response.data); // Log the response to check the structure
//             setWeatherData(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error(error); // Log the error for debugging
//             setError("Failed to fetch weather data.");
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="weather-page p-8 max-w-7xl mx-auto">
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center">Weather Forecast</h1>

//             {/* Button to get user location */}
//             {location === null ? (
//                 <div className="text-center">
//                     <button
//                         onClick={handleGetLocation}
//                         className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
//                     >
//                         Get My Location
//                     </button>
//                 </div>
//             ) : (
//                 <div className="text-center">
//                     <p className="mt-4 text-lg">Location: {location.latitude}, {location.longitude}</p>
//                 </div>
//             )}

//             {/* Error handling */}
//             {permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}
//             {error && !permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}

//             {/* Loading and Weather Data */}
//             {loading ? (
//                 <div className="text-center mt-4">Loading weather data...</div>
//             ) : (
//                 weatherData && weatherData.forecast.forecastday && (
//                     <div>
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">7-Day Weather Forecast</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {weatherData.forecast.forecastday.map((day, index) => (
//                                 <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold">
//                                         {new Date(day.date).toLocaleDateString()}
//                                     </h3>
//                                     <p className="text-gray-600">{day.day.condition.text}</p>
//                                     <p className="mt-2 text-lg">
//                                         Temp: {Math.round(day.day.avgtemp_c)}°C
//                                     </p>
//                                     <p className="mt-2 text-gray-600">
//                                         Min: {Math.round(day.day.mintemp_c)}°C | Max: {Math.round(day.day.maxtemp_c)}°C
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default WeatherPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const WeatherPage = () => {
//     const [location, setLocation] = useState(null);
//     const [weatherData, setWeatherData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [permissionDenied, setPermissionDenied] = useState(false);

//     const handleGetLocation = () => {
//         // Prompt user to allow location access
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ latitude, longitude });

//                     // Fetch weather data after getting the location
//                     await fetchWeatherData(latitude, longitude);
//                 },
//                 (error) => {
//                     setPermissionDenied(true);
//                     setError("Location access denied. Please enable location services.");
//                 }
//             );
//         } else {
//             setError("Geolocation is not supported by this browser.");
//         }
//     };

//     const fetchWeatherData = async (latitude, longitude) => {
//         setLoading(true);
//         setError(null);

//         const apiKey = "c90813b393c1497c99f50737250604"; // Replace with your WeatherAPI key
//         const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`;

//         try {
//             const response = await axios.get(url);
//             console.log(response.data); // Log the response to check the structure
//             setWeatherData(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error(error); // Log the error for debugging
//             setError("Failed to fetch weather data.");
//             setLoading(false);
//         }
//     };

//     // Chart Data Preparation
//     const chartData = weatherData ? {
//         labels: weatherData.forecast.forecastday.map((day) => new Date(day.date).toLocaleDateString()),
//         datasets: [
//             {
//                 label: "Temperature (°C)",
//                 data: weatherData.forecast.forecastday.map((day) => day.day.avgtemp_c),
//                 fill: false,
//                 borderColor: "rgba(75,192,192,1)",
//                 tension: 0.1,
//             },
//         ],
//     } : {};

//     return (
//         <div className="weather-page p-8 max-w-7xl mx-auto">
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center">Weather Forecast</h1>

//             {/* Button to get user location */}
//             {location === null ? (
//                 <div className="text-center">
//                     <button
//                         onClick={handleGetLocation}
//                         className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                     >
//                         Get My Location
//                     </button>
//                 </div>
//             ) : (
//                 <div className="text-center">
//                     <p className="mt-4 text-lg">Location: {location.latitude}, {location.longitude}</p>
//                 </div>
//             )}

//             {/* Error handling */}
//             {permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}
//             {error && !permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}

//             {/* Loading and Weather Data */}
//             {loading ? (
//                 <div className="text-center mt-4">Loading weather data...</div>
//             ) : (
//                 weatherData && weatherData.forecast.forecastday && (
//                     <div>
//                         {/* Displaying the chart */}
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">7-Day Temperature Forecast</h2>
//                         <div className="mb-6">
//                             <Line data={chartData} />
//                         </div>

//                         {/* Weather Data */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {weatherData.forecast.forecastday.map((day, index) => (
//                                 <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold">
//                                         {new Date(day.date).toLocaleDateString()}
//                                     </h3>
//                                     <p className="text-gray-600">{day.day.condition.text}</p>
//                                     <p className="mt-2 text-lg">
//                                         Temp: {Math.round(day.day.avgtemp_c)}°C
//                                     </p>
//                                     <p className="mt-2 text-gray-600">
//                                         Min: {Math.round(day.day.mintemp_c)}°C | Max: {Math.round(day.day.maxtemp_c)}°C
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default WeatherPage;


// import React, { useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const WeatherPage = () => {
//     const [location, setLocation] = useState(null);
//     const [weatherData, setWeatherData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [permissionDenied, setPermissionDenied] = useState(false);

//     const handleGetLocation = () => {
//         // Prompt user to allow location access
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ latitude, longitude });

//                     // Fetch weather data after getting the location
//                     await fetchWeatherData(latitude, longitude);
//                 },
//                 (error) => {
//                     setPermissionDenied(true);
//                     setError("Location access denied. Please enable location services.");
//                 }
//             );
//         } else {
//             setError("Geolocation is not supported by this browser.");
//         }
//     };

//     const fetchWeatherData = async (latitude, longitude) => {
//         setLoading(true);
//         setError(null);

//         const apiKey = "c90813b393c1497c99f50737250604"; // Replace with your WeatherAPI key
//         const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`;

//         try {
//             const response = await axios.get(url);
//             console.log(response.data); // Log the response to check the structure
//             setWeatherData(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error(error); // Log the error for debugging
//             setError("Failed to fetch weather data.");
//             setLoading(false);
//         }
//     };

//     // Chart Data Preparation
//     const chartData = weatherData ? {
//         labels: weatherData.forecast.forecastday.map((day) => new Date(day.date).toLocaleDateString()),
//         datasets: [
//             {
//                 label: "Temperature (°C)",
//                 data: weatherData.forecast.forecastday.map((day) => day.day.avgtemp_c),
//                 fill: false,
//                 borderColor: "rgba(75,192,192,1)",
//                 tension: 0.1,
//             },
//             {
//                 label: "Rain (mm)",
//                 data: weatherData.forecast.forecastday.map((day) => day.day.totalprecip_mm), // Rain data in mm
//                 fill: false,
//                 borderColor: "rgba(255,99,132,1)",
//                 tension: 0.1,
//                 yAxisID: "rain", // This will create a secondary Y axis for rain
//             },
//         ],
//     } : {};

//     return (
//         <div className="weather-page p-8 max-w-7xl mx-auto">
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center">Weather Forecast</h1>

//             {/* Button to get user location */}
//             {location === null ? (
//                 <div className="text-center">
//                     <button
//                         onClick={handleGetLocation}
//                         className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                     >
//                         Get My Location
//                     </button>
//                 </div>
//             ) : (
//                 <div className="text-center">
//                     <p className="mt-4 text-lg">Location: {location.latitude}, {location.longitude}</p>
//                 </div>
//             )}

//             {/* Error handling */}
//             {permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}
//             {error && !permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}

//             {/* Loading and Weather Data */}
//             {loading ? (
//                 <div className="text-center mt-4">Loading weather data...</div>
//             ) : (
//                 weatherData && weatherData.forecast.forecastday && (
//                     <div>
//                         {/* Displaying the chart */}
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">7-Day Weather Forecast</h2>
//                         <div className="mb-6">
//                             <Line 
//                                 data={chartData} 
//                                 options={{
//                                     responsive: true,
//                                     scales: {
//                                         y: {
//                                             beginAtZero: false,
//                                         },
//                                         rain: {
//                                             type: "linear",
//                                             position: "right",
//                                             grid: {
//                                                 drawOnChartArea: false,
//                                             },
//                                         },
//                                     },
//                                 }}
//                             />
//                         </div>

//                         {/* Weather Data */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {weatherData.forecast.forecastday.map((day, index) => (
//                                 <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold">
//                                         {new Date(day.date).toLocaleDateString()}
//                                     </h3>
//                                     <p className="text-gray-600">{day.day.condition.text}</p>
//                                     <p className="mt-2 text-lg">
//                                         Temp: {Math.round(day.day.avgtemp_c)}°C
//                                     </p>
//                                     <p className="mt-2 text-gray-600">
//                                         Min: {Math.round(day.day.mintemp_c)}°C | Max: {Math.round(day.day.maxtemp_c)}°C
//                                     </p>
//                                     <p className="mt-2 text-gray-600">
//                                         Rain: {day.day.totalprecip_mm} mm
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default WeatherPage;




import React, { useState } from "react"; import axios from "axios"; import { Line } from "react-chartjs-2"; import { motion } from "framer-motion"; import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherPage = () => { const [location, setLocation] = useState(null); const [weatherData, setWeatherData] = useState(null); const [loading, setLoading] = useState(false); const [error, setError] = useState(null); const [permissionDenied, setPermissionDenied] = useState(false);

const handleGetLocation = () => { if (navigator.geolocation) { navigator.geolocation.getCurrentPosition( async (position) => { const { latitude, longitude } = position.coords; setLocation({ latitude, longitude }); await fetchWeatherData(latitude, longitude); }, (error) => { setPermissionDenied(true); setError("📍 Location access denied. Please enable location services."); } ); } else { setError("❌ Geolocation is not supported by this browser."); } };

const fetchWeatherData = async (latitude, longitude) => { setLoading(true); setError(null); const apiKey = "8d1b2f7533a74d35bbc43438250604"; // Replace with your WeatherAPI key const url = https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7;
    try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError("⚠️ Failed to fetch weather data.");
        setLoading(false);
      }
    };

    const chartData = weatherData ? { labels: weatherData.forecast.forecastday.map((day) => new Date(day.date).toLocaleDateString()), datasets: [ { label: "Temperature (°C)", data: weatherData.forecast.forecastday.map((day) => day.day.avgtemp_c), fill: false, borderColor: "rgba(75,192,192,1)", tension: 0.1, }, { label: "Rain (mm)", data: weatherData.forecast.forecastday.map((day) => day.day.totalprecip_mm), fill: false, borderColor: "rgba(255,99,132,1)", tension: 0.1, yAxisID: "rain", }, ], } : {};
    
    return ( <div className="weather-page p-8 max-w-7xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-md"> <motion.h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} > 🌤️ Weather Forecast Dashboard </motion.h1>
      {location === null ? (
    <div className="text-center">
      <motion.button
        onClick={handleGetLocation}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📍 Get My Location
      </motion.button>
    </div>
  ) : (
    <motion.p
      className="text-center text-lg mt-4 text-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      📌 Location: {location.latitude}, {location.longitude}
    </motion.p>
  )}

  {permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}
  {error && !permissionDenied && <div className="text-red-500 text-center mt-4">{error}</div>}

  {loading ? (
    <motion.div
      className="text-center mt-10 text-xl text-blue-500"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      ⏳ Fetching weather data...
    </motion.div>
  ) : (
    weatherData && weatherData.forecast.forecastday && (
      <>
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4 mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🗓️ 7-Day Weather Overview
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Line
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: { beginAtZero: false },
                rain: {
                  type: "linear",
                  position: "right",
                  grid: { drawOnChartArea: false },
                },
              },
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {weatherData.forecast.forecastday.map((day, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{new Date(day.date).toDateString()}</h3>
              <p className="text-blue-600 mb-1">{day.day.condition.text} ☁️</p>
              <p className="text-lg font-medium">🌡️ {Math.round(day.day.avgtemp_c)}°C</p>
              <p className="text-sm text-gray-600">
                🔻 Min: {Math.round(day.day.mintemp_c)}°C | 🔺 Max: {Math.round(day.day.maxtemp_c)}°C
              </p>
              <p className="text-sm text-gray-600 mt-1">🌧️ Rain: {day.day.totalprecip_mm} mm</p>
            </motion.div>
          ))}
        </div>
      </>
    )
  )}
</div>
); };

export default WeatherPage;      
