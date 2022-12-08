import notFound from 'assets/notFound.svg';
import { NotFoundContainer } from './style';
import { WavyLink } from 'react-wavy-transitions';

const NotFound = () => (
    <NotFoundContainer>
        <div className="container-image">
            <img src={notFound} alt="Page not found" />
        </div>

        <p>A página que você está tentado acessar não existe.</p>
        <p>Volte para a página inicial</p>

        <WavyLink to="/" color="#216ce7">
            Voltar para a tela inicial
        </WavyLink>
    </NotFoundContainer>
);

export default NotFound;
