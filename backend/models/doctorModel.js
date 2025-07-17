import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
); //we used minimize:false to store empty objects in slots_booked, mtlb ki agar slots_booked empty h to bhi store ho jayega

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
// mongoose.models.doctor is used to check if the model already exists, if it does, it uses that model, otherwise it creates a new one. This prevents overwriting the model when the file is reloaded.

export default doctorModel;
