import { AiOutlineClose } from 'react-icons/ai';
import { ContainerModal } from './style';

import { UseHome } from 'providers/home';
import { ReactNode } from 'react';

interface ModalProps {
    title: string;
    children: ReactNode;
}

const Modal = ({ children, title }: ModalProps) => {
    const { setShowCreateUserModal } = UseHome();

    return (
        <ContainerModal>
            <div className="modal">
                <div className="header-controls">
                    <h2>{title}</h2>

                    <button>
                        <AiOutlineClose
                            size={20}
                            onClick={() => setShowCreateUserModal(false)}
                        />
                    </button>
                </div>
                {children}
            </div>
        </ContainerModal>
    );
};

export default Modal;
