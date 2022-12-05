import Input from '../input/index';

import Modal from 'components/baseModal';
import Button from 'components/button';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { Span } from 'components/span/style';

import { UseHome } from 'providers/home';
import { UseAuth } from 'providers/auth/index';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import addUserSchema from 'schemas/addUser';

import { ICreateContact } from 'interfaces/contacts/index';

const CreateContactModal = () => {
    const { createContact, setShowCreateContactModal } = UseHome();
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
        <Modal title="Adicionar contato" setState={setShowCreateContactModal}>
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
        </Modal>
    );
};

export default CreateContactModal;
