import { mask } from 'remask';

const maskPhone = (phone: string) => {
    '11952731112';
    const pattern = ['(99) 99999-9999'];

    return mask(phone, pattern);
};

export default maskPhone;
