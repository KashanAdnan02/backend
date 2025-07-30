import express from "express";
import { paymentLink } from "../controller/payment.controller.js";

const paymentRoute = express.Router()

paymentRoute.get("/", paymentLink)

export default paymentRoute