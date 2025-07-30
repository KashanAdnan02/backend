import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

import loanTypeRoutes from "./src/routes/loan.routes.js";
import applyLoan from "./src/routes/apply-loan.routes.js";
import gereralRoute from "./src/routes/general.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import activityRoutes from "./src/routes/activity.routes.js";
import paymentRoute from "./src/routes/payment.routes.js";

const app = express();
const PORT = 8080;


//env 
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//connect mongo db
connectDb();

//route
app.use("/api", authRoutes);

app.use("/loanType", loanTypeRoutes)
app.use("/loan", applyLoan)
app.use('/upload', gereralRoute)
app.use('/product', productRoutes)
app.use('/attendence', activityRoutes)
app.use('/payment', paymentRoute)



app.listen(PORT, () => {
  console.log("server is running");
});
