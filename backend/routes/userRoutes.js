
import express from 'express'
import { bookAppoinment, cancelAppointment, getProfile, listAppoinment, loginUser, paymentRazorpay, registerUser, updateProfile } from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'
import upload from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',authUser, upload.single('image'),updateProfile)
userRouter.post('/book-appoinment',authUser,bookAppoinment)
userRouter.get('/appoinments',authUser,listAppoinment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)








export default userRouter