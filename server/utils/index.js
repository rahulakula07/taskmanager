// import jwt from "jsonwebtoken";

// const createJWT = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   return token
//  res.cookie("token", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV !== "development", 
//   sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax", 
//   maxAge: 24 * 60 * 60 * 1000,
// });

// // res.cookie("token", token, {
// //   httpOnly: true,
// //   secure: false, // Set false in development
// //   sameSite: "lax", // 'none' causes cookies to be dropped in localhost
// //   maxAge: 24 * 60 * 60 * 1000,
// // });

// };

// export default createJWT;


import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use HTTPS in prod
    sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
};

export default createJWT;

