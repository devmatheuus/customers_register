import { z } from 'zod';

const signinSchema = z.object({
    email: z
        .string()
        .email('Insira um email válido')
        .max(50, 'O campo não pode conter mais de cinquenta caracteres'),
    password: z
        .string()
        .min(8, 'A senha deve conter mais que 8 caracteres')
        .max(50, 'A senha não pode conter mais de cinquenta caracteres')
        .refine(
            (password) => password.length >= 8,
            'A senha deve conter mais que 8 caracteres'
        ),
});

export default signinSchema;
