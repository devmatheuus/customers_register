import { createContext, useContext, useState } from 'react';
import IPropChildren from 'interfaces/childrenInterface';
import { toast } from 'react-toastify';
import api from 'services/api';
import { IHomeProvider } from 'interfaces/homeProvider/index';
import { useNavigate } from 'react-router-dom';
import {
    ICreateContact,
    IListContacts,
    IUpdateContact,
} from '../../interfaces/contacts/index';

const HomeContext = createContext<IHomeProvider>({} as IHomeProvider);

export const UseHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: IPropChildren) => {
    const [contacts, setContacts] = useState(Array<IListContacts>);
    const [showCreateContactModal, setShowCreateContactModal] = useState(false);
    const [showDeleteContactModal, setShowDeleteContactModal] = useState(false);
    const [showUpdateContactModal, setShowUpdateContactModal] = useState(false);
    const [currentContactId, setCurrentContactId] = useState('');

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
            })
            .finally(() => {
                setTimeout(() => {
                    toast.dismiss();
                }, 2500);
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
                toast.success('Contato adicionado com sucesso');
                setContacts([...contacts, response.data]);
            })
            .catch(() => {
                toast.error('Nome ou telefone já cadastrados');
            })
            .finally(() => {
                setShowCreateContactModal(false);

                setTimeout(() => {
                    toast.dismiss();
                }, 1500);
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
                toast.success('Contato excluído com sucesso');

                listOwnerContacts(token);
            })
            .catch(() => {
                toast.error(
                    'Houve um erro, tente novamente em alguns instantes'
                );
            })
            .finally(() => {
                setShowDeleteContactModal(false);

                setTimeout(() => {
                    toast.dismiss();
                }, 2500);
            });
    };

    const updateContact = (token: string, data: IUpdateContact) => {
        toast.loading('Atualizando...');

        api.post('/contacts', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                toast.success('Contato atualizado com sucesso');

                listOwnerContacts(token);
            })
            .catch(() => {
                toast.error('Nome ou telefone já cadastrados');
            })
            .finally(() => {
                setShowUpdateContactModal(false);

                setTimeout(() => {
                    toast.dismiss();
                }, 2500);
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
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
