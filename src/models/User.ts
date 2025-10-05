import { model } from "mongoose";
import { IUserInfo } from "../types";
import UserInfoSchema from "../schemas/UserInfo";


const User = model<IUserInfo>('User', UserInfoSchema);

export default User;