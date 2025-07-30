



import express from "express";
import { create, getUserAttendence } from "../controller/activity.controller.js";

const activityRoutes = express.Router()

activityRoutes.post('/', create)
activityRoutes.get('/:id', getUserAttendence)



export default activityRoutes