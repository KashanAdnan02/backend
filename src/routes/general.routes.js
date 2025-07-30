

import express from 'express'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
import { general } from '../controller/general.controller.js'

const upload = multer({storage:storage})



const gereralRoute = express.Router()


gereralRoute.post('/',upload.single("image"), general )

export default gereralRoute