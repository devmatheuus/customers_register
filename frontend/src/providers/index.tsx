import IPropChildren from '../interfaces/childrenInterface';
import { AuthProvider } from './auth';

const Providers = ({ children }: IPropChildren) => (
    <AuthProvider>{children}</AuthProvider>
);

export default Providers;
