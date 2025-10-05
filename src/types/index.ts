import { Document } from "mongoose"

export interface IUserInfo extends Document {
    name: string;
    title: {
        en: string;
        es: string;
    };
    description: {
        en: string;
        es: string;
    };
    about: {
        en: string[];
        es: string[];
    };
    createdAt: Date;
    updatedAt: Date;
};