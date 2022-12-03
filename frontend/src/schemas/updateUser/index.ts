import { z } from 'zod';

const updateUserSchema = z.object({
    fullname: z
        .string()
        .min(2, 'O campo deve conter mais de 2 caracteres')
        .max(100, 'O campo não pode conter mais de cem caracteres')
        .optional(),
    email: z
        .string()
        .email('Insira um email válido')
        .max(50, 'O campo não pode conter mais de cinquenta caracteres')
        .optional(),
    phone: z
        .string()
        .min(11, 'Insira um número de telefone válido')
        .max(15, 'Insira um número de telefone válido')
        .refine((phone) => {
            phone = phone.replace(/_/g, '');

            return phone.length >= 15;
        }, 'Insira um número de telefone válido')
        .transform((phone) => phone.replace(/[^0-9]/g, ''))
        .optional(),
});

export default updateUserSchema;
