import { Switch, Route } from 'react-router';

import GlobalStyle from '../styles/global';
import SignUpPage from 'pages/signup';

const Routes = () => (
    <>
        <GlobalStyle />
        <Switch>
            <Route exact path="/">
                <SignUpPage />
            </Route>
        </Switch>
    </>
);

export default Routes;
