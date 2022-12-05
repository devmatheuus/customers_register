import { IListAccount } from 'interfaces/account';
import { IUpdateContact } from 'interfaces/contacts';

export interface IAccountProvider {
    accountData: IListAccount;
    listAccount: (token: string, id: string) => void;
    updateUser: (token: string, data: IUpdateContact, id: string) => void;
}
