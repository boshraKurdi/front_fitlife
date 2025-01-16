import { z } from 'zod';

const LoginScema =  z.object({
    email: z.string().min(1, { message: 'email is required' }).email({ message: 'invalid email address' }),
    password: z.string().min(8, { message: 'password must be at least 8 characters long' }),
})

export default LoginScema