import { UseHome } from 'providers/home';
import { UseAuth } from '../../providers/auth/index';
import Modal from 'components/baseModal';
import { ContainerButton, StyledParagraph } from './style';

const DeleteUserModal = () => {
    const { setShowDeleteUserModal, currentContactId, deleteContact } =
        UseHome();
    const { token } = UseAuth();

    const handleForm = () => {
        deleteContact(token, currentContactId);
    };

    return (
        <Modal title="Excluir contato">
            <StyledParagraph>
                Tem certeza que deseja excluir esse contato? Essa ação não
                poderá ser desfeita.
            </StyledParagraph>
            <ContainerButton>
                <button type="button" onClick={() => handleForm()}>
                    Excluir
                </button>

                <button
                    type="button"
                    onClick={() => setShowDeleteUserModal(false)}
                >
                    Cancelar
                </button>
            </ContainerButton>
        </Modal>
    );
};

export default DeleteUserModal;
