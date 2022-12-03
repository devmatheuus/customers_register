import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import { WavyContainer } from 'react-wavy-transitions';
import Providers from 'providers';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Providers>
            <WavyContainer />
            <App />
        </Providers>
    </BrowserRouter>
);
