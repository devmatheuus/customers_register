import { Route, Routes } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import SignUpPage from 'pages/signup';

import { WavyContainer } from 'react-wavy-transitions';
import SignInPage from 'pages/signin';

const RoutesTeste = () => (
    <>
        <GlobalStyle />
        <WavyContainer />
        <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
        </Routes>
    </>
);

export default RoutesTeste;
