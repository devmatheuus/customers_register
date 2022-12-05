import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import IPropChildren from 'interfaces/childrenInterface';
import { IHomeProvider } from 'interfaces/homeProvider/index';
import {
    ICreateContact,
    IListContacts,
    IUpdateContact,
} from 'interfaces/contacts/index';

import { useNavigate } from 'react-router-dom';
import api from 'services/api';

const HomeContext = createContext<IHomeProvider>({} as IHomeProvider);

export const UseHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: IPropChildren) => {
    const [contacts, setContacts] = useState(Array<IListContacts>);
    const [showCreateContactModal, setShowCreateContactModal] = useState(false);
    const [showDeleteContactModal, setShowDeleteContactModal] = useState(false);
    const [showUpdateContactModal, setShowUpdateContactModal] = useState(false);
    const [currentContactId, setCurrentContactId] = useState('');
    const [defaultContactDatas, setDefaultContactDatas] =
        useState<IListContacts>({} as IListContacts);

    const navigate = useNavigate();

    const listOwnerContacts = (token: string) => {
        api.get('/contacts', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setContacts(response.data);
            })
            .catch(() => {
                localStorage.clear();

                toast.error('Erro ao carregar tarefas, faça login novamente');
                navigate('/signin');
            });
    };

    const createContact = (token: string, data: ICreateContact) => {
        toast.loading('Carregando...');

        api.post('/contacts', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                toast.dismiss();
                toast.success('Contato adicionado com sucesso');

                setContacts([...contacts, response.data]);
            })
            .catch(() => {
                toast.dismiss();
                toast.error('Nome ou telefone já cadastrados');
            })
            .finally(() => {
                setShowCreateContactModal(false);

                toast.dismiss();
            });
    };

    const deleteContact = (token: string, id: string) => {
        toast.loading('Excluindo...');

        api.delete(`/contacts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                toast.dismiss();
                toast.success('Contato excluído com sucesso');

                listOwnerContacts(token);
            })
            .catch(() => {
                toast.dismiss();
                toast.error(
                    'Houve um erro, tente novamente em alguns instantes'
                );
            })
            .finally(() => {
                setShowDeleteContactModal(false);
            });
    };

    const updateContact = (
        token: string,
        data: IUpdateContact,
        contactId: string
    ) => {
        toast.loading('Atualizando...');

        api.patch(`/contacts/${contactId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                toast.dismiss();
                toast.success('Contato atualizado com sucesso');

                listOwnerContacts(token);
            })
            .catch(() => {
                toast.dismiss();
                toast.error('Nome ou telefone já cadastrados');
            })
            .finally(() => {
                setShowUpdateContactModal(false);
            });
    };

    const listOneContact = (token: string, contactId: string) => {
        api.get(`/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setDefaultContactDatas(res.data);
            })
            .catch(() => {
                localStorage.clear();

                toast.error('Erro ao carregar tarefas, faça login novamente');
                navigate('/signin');
            });
    };

    return (
        <HomeContext.Provider
            value={{
                contacts,
                listOwnerContacts,
                setShowCreateContactModal,
                showCreateContactModal,
                createContact,
                deleteContact,
                setShowDeleteContactModal,
                showDeleteContactModal,
                currentContactId,
                setCurrentContactId,
                setShowUpdateContactModal,
                showUpdateContactModal,
                updateContact,
                listOneContact,
                defaultContactDatas,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
