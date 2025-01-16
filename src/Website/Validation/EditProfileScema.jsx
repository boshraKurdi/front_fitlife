import { z } from 'zod';

const EditProfileScema =  z.object({
    name: z.string().min(1, { message: 'required' }),
    age: z.string().min(1, { message: 'required' }),
    width: z.string().min(1, { message: 'required' }),
    height: z.string().min(1, { message: 'required' }),
    address: z.string().min(1, { message: 'required' }),
    illness: z.string(),
    gender: z.string(),
    lat: z.string(),
    lon: z.string(),
})

export default EditProfileScema