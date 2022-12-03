import IPropChildren from '../interfaces/childrenInterface';
import { AuthProvider } from './auth';
import { HomeProvider } from './home/index';

const Providers = ({ children }: IPropChildren) => (
    <AuthProvider>
        <HomeProvider>{children}</HomeProvider>
    </AuthProvider>
);

export default Providers;
