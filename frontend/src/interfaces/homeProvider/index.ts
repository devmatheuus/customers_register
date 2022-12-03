import { Dispatch, SetStateAction } from 'react';
import { ICreateContact, IListContacts } from '../contacts/index';

export interface IHomeProvider {
    contacts: IListContacts[];
    listOwnerContacts: (token: string) => void;

    showCreateUserModal: boolean;
    setShowCreateUserModal: Dispatch<SetStateAction<boolean>>;

    showDeleteUserModal: boolean;
    setShowDeleteUserModal: Dispatch<SetStateAction<boolean>>;

    currentContactId: string;
    setCurrentContactId: Dispatch<SetStateAction<string>>;

    createContact: (token: string, data: ICreateContact) => void;
    deleteContact: (token: string, id: string) => void;
}
