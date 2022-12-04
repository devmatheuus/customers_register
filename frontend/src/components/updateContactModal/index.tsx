import Input from '../input/index';
import { useForm } from 'react-hook-form';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import Button from 'components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseHome } from 'providers/home';
import { Span } from 'components/span/style';
import { IUpdateContact } from '../../interfaces/contacts/index';
import { UseAuth } from '../../providers/auth/index';
import Modal from 'components/baseModal';
import updateUserSchema from '../../schemas/updateUser/index';

const UpdateContactModal = () => {
    const { setShowUpdateContactModal } = UseHome();
    const { token } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateContact>({
        resolver: zodResolver(updateUserSchema),
    });

    const handleForm = (data: IUpdateContact) => {
        // createContact(token, data);
    };

    return (
        <Modal title="Atualizar contato" setState={setShowUpdateContactModal}>
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

                <Button content="Atualizar" />
            </form>
        </Modal>
    );
};

export default UpdateContactModal;
