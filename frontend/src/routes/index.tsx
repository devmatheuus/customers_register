import { Route, Routes } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import SignUpPage from 'pages/signup';

import { WavyContainer } from 'react-wavy-transitions';
import SignInPage from 'pages/signin';
import HomePage from 'pages/home';

const RoutesTeste = () => (
    <>
        <GlobalStyle />
        <WavyContainer />
        <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </>
);

export default RoutesTeste;
