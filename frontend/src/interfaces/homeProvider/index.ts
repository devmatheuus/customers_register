import { Dispatch, SetStateAction } from 'react';
import { ICreateContact, IListContacts } from '../contacts/index';

export interface IHomeProvider {
    contacts: IListContacts[];
    listOwnerContacts: (token: string) => void;

    showCreateContactModal: boolean;
    setShowCreateContactModal: Dispatch<SetStateAction<boolean>>;

    showDeleteContactModal: boolean;
    setShowDeleteContactModal: Dispatch<SetStateAction<boolean>>;

    setShowUpdateContactModal: Dispatch<SetStateAction<boolean>>;
    showUpdateContactModal: boolean;

    currentContactId: string;
    setCurrentContactId: Dispatch<SetStateAction<string>>;

    createContact: (token: string, data: ICreateContact) => void;
    deleteContact: (token: string, id: string) => void;
}
