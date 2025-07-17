import jwt from "jsonwebtoken";

//user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = token_decoded.id; // ✅ This works in POST
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
