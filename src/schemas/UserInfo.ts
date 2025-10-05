import { Schema } from "mongoose";
import { IUserInfo } from "../types";


const UserInfoSchema = new Schema<IUserInfo>({
  name: { type: String, required: true },
  title: {
    en: { type: String, required: true },
    es: { type: String, required: true }
  },
  description: {
    en: { type: String, required: true },
    es: { type: String, required: true }
  },
  about: {
    en: { type: [String], required: true },
    es: { type: [String], required: true }
  },
}, { timestamps: true })

export default UserInfoSchema;