import { createContext, useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { IUpdateContact } from 'interfaces/contacts/index';
import IPropChildren from 'interfaces/childrenInterface';

import api from 'services/api';

import { IListAccount } from 'interfaces/account';
import { IAccountProvider } from 'interfaces/accountProvider';

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
            });
    };

    const updateUser = (token: string, data: IUpdateContact, id: string) => {
        toast.loading('Atualizando...');

        api.patch(`/customers/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                toast.success('Dados atualizados com sucesso');
            })
            .catch(() => {
                toast.error('Nome ou telefone já cadastrados');
            })
            .finally(() => {
                setTimeout(() => {
                    toast.dismiss();
                }, 2500);
            });
    };

    return (
        <AccountContext.Provider
            value={{ accountData, listAccount, updateUser }}
        >
            {children}
        </AccountContext.Provider>
    );
};
