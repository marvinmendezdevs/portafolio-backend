import { Router } from "express";
import User from "../models/User";


const router = Router();

// Personal information routin
router.post('/personal-information', async (req, res) => {
    const { body } = req;

    try {
        await User.create(body);
        res.status(201).json({ status: "ok", message: "Information created success"});
    } catch (error) {
        res.status(409).json({ status: "failed", message: "Error information creation"});
    }
})

export default router;