import { z } from 'zod';

const PaymentScema =  z.object({
    type: z.string(),
    number: z.string().min(1, { message: 'number is required' }),
    cvc: z.string().min(1, { message: 'number cvc is required' }),
    year: z.string().min(1, { message: 'year is required' }),
    month: z.string().min(1, { message: 'month is required' }),
    price: z.string().min(1, { message: 'price is required' }),
})

export default PaymentScema