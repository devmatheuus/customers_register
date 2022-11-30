import { Switch, Route } from 'react-router';
import GlobalStyle from '../styles/global';

const Routes = () => (
    <>
        <GlobalStyle />
        <Switch>
            <Route exact path="/">
                <>
                    <h1>Hello world</h1>
                </>
            </Route>
        </Switch>
    </>
);

export default Routes;
