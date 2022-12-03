import { createContext, useContext, useState } from 'react';
import IPropChildren from 'interfaces/childrenInterface';
import { toast } from 'react-toastify';
import api from 'services/api';
import { IListContacts } from 'interfaces/homeProvider/index';
import { useNavigate } from 'react-router-dom';

interface IHomeProvider {
    contacts: IListContacts[];
    listOwnerContacts: (token: string) => void;
}

const HomeContext = createContext<IHomeProvider>({} as IHomeProvider);

export const UseHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }: IPropChildren) => {
    const [contacts, setContacts] = useState(Array<IListContacts>);

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

    return (
        <HomeContext.Provider value={{ contacts, listOwnerContacts }}>
            {children}
        </HomeContext.Provider>
    );
};
