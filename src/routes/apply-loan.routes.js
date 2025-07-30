

import express from "express"
import { acceptLoan, createLoan, deleteLoan, getLoan, updateLoan } from "../controller/loan.controller.js"



const applyLoan = express.Router()

applyLoan.get('/', getLoan)
applyLoan.post('/', createLoan)
applyLoan.put('/accept', acceptLoan)
applyLoan.delete('/:id', deleteLoan)
applyLoan.put('/:id', updateLoan)




export default applyLoan