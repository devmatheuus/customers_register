import { mask } from 'remask';

const maskPhone = (phone: string) => {
    const pattern = ['(99) 99999-9999'];

    return mask(phone, pattern);
};

export default maskPhone;
