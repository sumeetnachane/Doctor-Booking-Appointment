import jwt from "jsonwebtoken";

//doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not Authorized login again",
      });
    }

    const token_decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

    req.docId = token_decoded.id; // ✅ This works in POST
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
