import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'services/api';
import IPropChildren from '../../interfaces/childrenInterface';
import { IListContacts } from '../../interfaces/contacts/index';

interface IListAccount {
    id: string;
    fullname: string;
    email: string;
    password: string;
    phone: string;
    createdAt: string;
    contacts: IListContacts[];
}

interface IAccountProvider {
    accountData: IListAccount;
    listAccount: (token: string, id: string) => void;
}

const AccountContext = createContext<IAccountProvider>({} as IAccountProvider);

export const UseAccount = () => useContext(AccountContext);

export const AccountProvider = ({ children }: IPropChildren) => {
    const [accountData, setAccountData] = useState({} as IListAccount);

    const navigate = useNavigate();

    const listAccount = (token: string, id: string) => {
        api.get(`/customers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => setAccountData(response.data))
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

    return (
        <AccountContext.Provider value={{ accountData, listAccount }}>
            {children}
        </AccountContext.Provider>
    );
};
