import { Dispatch, SetStateAction } from 'react';
import {
    ICreateContact,
    IListContacts,
    IUpdateContact,
} from '../contacts/index';

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

    defaultContactDatas: IListContacts;

    createContact: (token: string, data: ICreateContact) => void;
    deleteContact: (token: string, id: string) => void;
    updateContact: (
        token: string,
        data: IUpdateContact,
        contactId: string
    ) => void;
    listOneContact: (token: string, contactId: string) => void;
}
