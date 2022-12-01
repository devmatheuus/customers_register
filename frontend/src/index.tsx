import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import { WavyContainer } from 'react-wavy-transitions';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <WavyContainer />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
