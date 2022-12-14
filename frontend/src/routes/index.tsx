import { Route, Routes } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';

import GlobalStyle from '../styles/global';

import SignInPage from 'pages/signin';
import SignUpPage from 'pages/signup';
import HomePage from 'pages/home';
import AccountPage from 'pages/account';
import NotFound from 'pages/notFound';

const RoutesTeste = () => (
    <>
        <GlobalStyle />
        <WavyContainer />
        <Routes>
            <Route path="/" element={<SignUpPage />} />

            <Route path="/signin" element={<SignInPage />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/account" element={<AccountPage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
);

export default RoutesTeste;
