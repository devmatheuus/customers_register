import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { ContainerModal } from './style';

interface ModalProps {
    title: string;
    children: ReactNode;
    setState: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, title, setState }: ModalProps) => {
    return (
        <ContainerModal>
            <div className="modal">
                <div className="header-controls">
                    <h2>{title}</h2>

                    <button>
                        <AiOutlineClose
                            size={20}
                            onClick={() => setState(false)}
                        />
                    </button>
                </div>
                {children}
            </div>
        </ContainerModal>
    );
};

export default Modal;
