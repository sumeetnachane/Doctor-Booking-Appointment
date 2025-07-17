import multer from "multer";

//  multer.diskStorage({...})
// Yeh batata hai ki file ko server ke local disk me kaise store karna hai.
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });
export default upload;

// filename(req, file, callback)
// Yeh function batata hai ki upload hone ke baad file ka naam kya hoga.

// Aap file.originalname use kar rahe ho — yani original naam se hi save hoga.
//  const upload = multer({ storage })
// Aapne multer instance banaya hai jisme custom storage strategy set ki hai.
