import { Dispatch, SetStateAction } from 'react';
import { ICreateContact, IListContacts } from '../contacts/index';

export interface IHomeProvider {
    contacts: IListContacts[];
    listOwnerContacts: (token: string) => void;

    showCreateUserModal: boolean;
    setShowCreateUserModal: Dispatch<SetStateAction<boolean>>;

    createContact: (token: string, data: ICreateContact) => void;
}
