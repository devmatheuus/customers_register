import { z } from 'zod';

const signupSchema = z.object({
    fullname: z
        .string()
        .min(2, 'O campo deve conter mais de 2 caracteres')
        .max(100, 'O campo não pode conter mais de cem caracteres'),
    email: z
        .string()
        .email('Insira um email válido')
        .max(50, 'O campo não pode conter mais de cinquenta caracteres'),
    password: z
        .string()
        .min(2, 'A senha deve conter mais que 4 caracteres')
        .max(50, 'A senha não pode conter mais de cinquenta caracteres')
        .refine(
            (password) => password.length > 2,
            'A senha deve conter mais que 4 caracteres'
        ),
    phone: z
        .string()
        .min(11, 'Insira um número de telefone válido')
        .max(15, 'Insira um número de telefone válido')
        .refine((phone) => {
            phone = phone.replace(/_/g, '');

            return phone.length >= 15;
        }, 'Insira um número de telefone válido'),
});

export default signupSchema;
