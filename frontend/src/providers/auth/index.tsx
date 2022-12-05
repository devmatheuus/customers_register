import { createContext, useContext, useEffect, useState } from 'react';
import IPropChildren from '../../interfaces/childrenInterface';
import {
    ICreateAccountRequest,
    ILoginRequest,
} from '../../interfaces/sessions/index';
import { toast } from 'react-toastify';
import api from 'services/api';
import IAuthProvider from '../../interfaces/authProvider/index';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export const UseAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: IPropChildren) => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    const [token, setToken] = useState(
        () => (localStorage.getItem('token') as string) || ''
    );

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) setAuthenticated(true);
    }, [authenticated]);

    const logout = () => {
        setAuthenticated(false);

        navigate('/');
        localStorage.clear();
    };

    const signin = (data: ILoginRequest) => {
        toast.loading('Carregando...');

        api.post('/customers/signin', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);

                setToken(response.data.token);

                toast.dismiss();
                toast.success('Login efetuado com sucesso!');

                setAuthenticated(true);

                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            })
            .catch((error) => {
                toast.dismiss();
                toast.error('Email ou senha inválidos');
            });
    };

    const signup = (data: ICreateAccountRequest) => {
        toast.loading('Criando conta...');

        api.post('/customers', data)
            .then((response) => {
                toast.dismiss();
                toast.success('Cadastro efetuado com sucesso!');

                setTimeout(() => {
                    navigate('/signin');
                }, 2000);
            })
            .catch((error) => {
                toast.dismiss();
                toast.error('Email ou telefone já cadastrados');
            });
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                logout,
                setAuthenticated,
                signin,
                signup,
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
