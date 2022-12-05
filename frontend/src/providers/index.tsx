import IPropChildren from '../interfaces/childrenInterface';
import { AuthProvider } from './auth';
import { HomeProvider } from './home/index';
import { AccountProvider } from './account/index';

const Providers = ({ children }: IPropChildren) => (
    <AuthProvider>
        <HomeProvider>
            <AccountProvider>{children}</AccountProvider>
        </HomeProvider>
    </AuthProvider>
);

export default Providers;
