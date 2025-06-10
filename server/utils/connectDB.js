// import mongoose from "mongoose";

// const dbConnection = async () => {
//   try {
//     // await mongoose.connect(process.env.MONGODB_URI);
//     await mongoose.connect(process.env.MONGODB_URL);


//     console.log("Database Connected");
//   } catch (error) {
//     console.log("DB Error: " + error);
//   }
// };

// export default dbConnection;


import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Wait max 10 seconds for server
    });

    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
  }
};

export default dbConnection;
