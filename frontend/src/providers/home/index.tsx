import { createContext, useContext, useState } from 'react';
import IPropChildren from 'interfaces/childrenInterface';
import { toast } from 'react-toastify';
import api from 'services/api';
import { IHomeProvider } from 'interfaces/homeProvider/index';
import { useNavigate } from 'react-router-dom';
import { ICreateContact, IListContacts } from '../../interfaces/contacts/index';

const HomeContext = createContext<IHomeProvider>({} as IHomeProvider);

export const UseHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: IPropChildren) => {
    const [contacts, setContacts] = useState(Array<IListContacts>);
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    const navigate = useNavigate();

    const listOwnerContacts = (token: string) => {
        toast.loading('Carregando...');

        api.get('/contacts', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setContacts(response.data);
                toast.dismiss();
            })
            .catch(() => {
                localStorage.clear();
                toast.error('Erro ao carregar tarefas, faça login novamente');
                toast.dismiss();
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
                setShowCreateUserModal(false);
            });
    };

    return (
        <HomeContext.Provider
            value={{
                contacts,
                listOwnerContacts,
                setShowCreateUserModal,
                showCreateUserModal,
                createContact,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
