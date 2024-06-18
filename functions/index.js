// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// // Initialize express app
// const app = express();

// // Middleware setup
// const allowedOrigins = [
//   "http://localhost:3000", // Your local development URL
//   "https://roshi-health-frontend.vercel.app", // Your production frontend URL
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// // Import routes
// const userRoutes = require("./routes/userRoutes");
// const programRoutes = require("./routes/programRoutes");
// const workoutRoutes = require("./routes/workoutRoutes");
// const exerciseRoutes = require("./routes/exerciseRoutes");

// // Use routes
// app.use("/api/users", userRoutes);
// app.use("/api/programs", programRoutes);
// app.use("/api/workouts", workoutRoutes);
// app.use("/api/exercises", exerciseRoutes);

// // Do not listen on a specific port, Firebase Functions will handle it
// // app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));

// // Export the app for Firebase Functions
// exports.api = functions.https.onRequest(app);

// ###################################################

// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// // Initialize express app
// const app = express();

// // Middleware setup
// const allowedOrigins = [
//   "http://localhost:3000", // Your local development URL
//   "https://roshi-health-frontend.vercel.app", // Your production frontend URL
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// // Import routes
// const userRoutes = require("./routes/userRoutes");
// const programRoutes = require("./routes/programRoutes");
// const workoutRoutes = require("./routes/workoutRoutes");
// const exerciseRoutes = require("./routes/exerciseRoutes");

// // Use routes
// app.use("/api/users", userRoutes);
// app.use("/api/programs", programRoutes);
// app.use("/api/workouts", workoutRoutes);
// app.use("/api/exercises", exerciseRoutes);

// // Export the app for Firebase Functions
// exports.api = functions.https.onRequest(app);

// // Start server for local development
// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// ###########################################

// functions/index.js

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize express app
const app = express();

// Middleware setup
const allowedOrigins = [
  "http://localhost:3000", // Your local development URL
  "https://roshi-health-frontend.vercel.app", // Your production frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Import routes
const userRoutes = require("./routes/userRoutes");
const programRoutes = require("./routes/programRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/exercises", exerciseRoutes);

// Start server for local development
// If the FUNCTION_NAME environment variable is not set, this means we're running locally
if (!process.env.FUNCTION_NAME) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export the app for Firebase Functions
exports.api = functions.https.onRequest(app);
