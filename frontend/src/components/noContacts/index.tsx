import NoContactsContainer from './style';
import noContactImage from 'assets/noContacts.svg';

const NoContacts = () => (
    <NoContactsContainer>
        <div>
            <img src={noContactImage} alt="No Contacts" />
        </div>

        <h2>Parece que você ainda não adicionou nenhum contato</h2>

        <h3>
            Adicione um novo contato clicando no botão na parte inferior da tela
        </h3>
    </NoContactsContainer>
);

export default NoContacts;
