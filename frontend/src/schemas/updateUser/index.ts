import { z } from 'zod';

const validateEmail = z.string().email();

const updateUserSchema = z.object({
    fullname: z
        .string()
        .optional()
        .refine((fullname) => {
            if (fullname) {
                return fullname.length > 2 && fullname.length < 100;
            } else {
                return true;
            }
        }, 'O nome deve conter mais de 2 caracteres e menos de 100'),
    email: z
        .string()
        .optional()
        .refine((email) => {
            if (email) {
                console.log('oi');
                const isEmail = validateEmail.safeParse(email);

                return email.length < 50 && isEmail.success;
            } else {
                console.log('ai');

                return true;
            }
        }, 'Insira um email válido com menos de com menos de 50 caracteres.'),
    phone: z
        .string()
        .optional()
        .refine((phone) => {
            if (phone) {
                phone = phone.replace(/_/g, '');
                let phoneValidate = phone.length >= 11 && phone.length <= 15;

                if (!phoneValidate) {
                    return false;
                }

                phone = phone.replace(/[^0-9]/g, '');
                console.log('oi');
                console.log(phone);

                return phone.length === 11 ? true : false;
            } else {
                return true;
            }
        }, 'Insira um número de telefone válido'),
});

export default updateUserSchema;
