import { IListContacts } from 'interfaces/contacts';

export interface IListAccount {
    id: string;
    fullname: string;
    email: string;
    password: string;
    phone: string;
    createdAt: string;
    contacts: IListContacts[];
}
