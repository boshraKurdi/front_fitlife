import { z } from 'zod';

const SignUpScema =  z.object({
    name: z.string().min(1, { message: 'name is required' }),
    email: z.string().min(1, { message: 'email is required' }).email({ message: 'invalid email address' }),
    password: z.string().min(8, { message: 'password must be at least 8 characters long' }),
    confirm: z.string().min(8, { message: 'confirm password is required' })
})
.refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"], // Path of the error
});

export default SignUpScema