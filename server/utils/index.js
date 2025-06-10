import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // res.cookie("token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
  //   sameSite: "none", // Prevent CSRF attacks
  //   maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
  // });
res.cookie("token", token, {
  httpOnly: true,
  secure: false, // Set false in development
  sameSite: "lax", // 'none' causes cookies to be dropped in localhost
  maxAge: 24 * 60 * 60 * 1000,
});

};

export default createJWT;



