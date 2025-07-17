import { Router } from "express";
import { forgotPasswordController, loginUserController, logoutController, refreshToken, registerUserController , removeImageFromCloudinary, resetPasswordController, updateUserDetails, userAvatarController, userDetails, verifyEmailController, verifyForgotPassword } from '../controllers/user.controller.js'; 
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/verifyEmail', verifyEmailController);
userRouter.post('/login', loginUserController);
userRouter.get('/logout',auth, logoutController);
userRouter.put('/user-avatar',auth,upload.array('avatar'), userAvatarController);
userRouter.delete('/deleteImage' , auth , removeImageFromCloudinary);
userRouter.post('/forgot-password', forgotPasswordController);
userRouter.post('/verify-forgot-password', verifyForgotPassword  );
userRouter.post('/reset-password', resetPasswordController);
userRouter.post('/refresh-token', refreshToken);
userRouter.get('/user-details',auth , userDetails);
userRouter.put('/:id', auth, updateUserDetails);



export default userRouter;
