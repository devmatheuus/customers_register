import { AiOutlineClose } from 'react-icons/ai';
import { ContainerModal } from './style';
import Input from '../input/index';
import { useForm } from 'react-hook-form';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import Button from 'components/button';
import addUserSchema from 'schemas/addUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseHome } from 'providers/home';
import { Span } from 'components/span/style';
import { ICreateContact } from '../../interfaces/contacts/index';
import { UseAuth } from '../../providers/auth/index';

const CreateUserModal = () => {
    const { setShowCreateUserModal, createContact } = UseHome();
    const { token } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateContact>({
        resolver: zodResolver(addUserSchema),
    });

    const handleForm = (data: ICreateContact) => {
        createContact(token, data);
    };

    return (
        <ContainerModal>
            <div className="modal">
                <div className="header-controls">
                    <h2>Adicionar contato</h2>

                    <button>
                        <AiOutlineClose
                            size={20}
                            onClick={() => setShowCreateUserModal(false)}
                        />
                    </button>
                </div>

                <form onSubmit={handleSubmit(handleForm)}>
                    <Input
                        register={register}
                        Icon={BiUserCircle}
                        placeholder="Nome completo"
                        name="fullname"
                        type="text"
                    />
                    <Span>{errors.fullname?.message}</Span>

                    <Input
                        register={register}
                        Icon={HiOutlineMail}
                        placeholder="Email"
                        name="email"
                        type="text"
                    />
                    <Span>{errors.email?.message}</Span>

                    <Input
                        register={register}
                        Icon={BsPhone}
                        placeholder="Número de telefone"
                        name="phone"
                        type="text"
                        mask="(99) 99999-9999"
                    />
                    <Span>{errors.phone?.message}</Span>

                    <Button content="Adicionar" />
                </form>
            </div>
        </ContainerModal>
    );
};

export default CreateUserModal;
