import {
    ICreateAccountRequest,
    ILoginRequest,
} from 'interfaces/sessions/index';

export default interface IAuthProvider {
    token: string;

    signin: (userData: ILoginRequest) => void;
    signup: (userData: ICreateAccountRequest) => void;
    logout: () => void;

    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
