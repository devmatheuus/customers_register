import Input from '../input/index';
import updateUserSchema from 'schemas/updateUser/index';
import maskPhone from 'utils/maskPhone';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';

import Button from 'components/button';
import { Span } from 'components/span/style';
import Modal from 'components/baseModal';

import { UseHome } from 'providers/home';
import { UseAuth } from 'providers/auth/index';

import { IUpdateContact } from 'interfaces/contacts/index';

const UpdateContactModal = () => {
    const {
        setShowUpdateContactModal,
        currentContactId,
        updateContact,
        listOneContact,
        defaultContactDatas,
    } = UseHome();

    const { token } = UseAuth();

    const getDefaultContactData = (contactId: string) => {
        listOneContact(token, contactId);

        return defaultContactDatas;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateContact>({
        resolver: zodResolver(updateUserSchema),
    });

    const handleForm = (data: IUpdateContact) => {
        const formateData = Object.fromEntries(
            Object.entries(data).filter(([o, v]) => v !== '')
        );

        if (formateData.phone) {
            formateData.phone = phone.replace(/[^0-9]/g, '');
        }

        updateContact(token, formateData, currentContactId);
    };

    const returnDefaultContactValues = () => {
        const defaultData = getDefaultContactData(currentContactId);

        const { email, fullname, phone } = defaultData;

        const contactData = { email, fullname, phone };

        return contactData;
    };

    const { email, fullname, phone } = returnDefaultContactValues();

    return (
        <Modal title="Atualizar contato" setState={setShowUpdateContactModal}>
            <form onSubmit={handleSubmit(handleForm)}>
                <Input
                    register={register}
                    Icon={BiUserCircle}
                    placeholder={fullname}
                    name="fullname"
                    type="text"
                />
                <Span>{errors.fullname?.message}</Span>

                <Input
                    register={register}
                    Icon={HiOutlineMail}
                    placeholder={email}
                    name="email"
                    type="text"
                />
                <Span>{errors.email?.message}</Span>

                <Input
                    register={register}
                    Icon={BsPhone}
                    placeholder={phone && maskPhone(phone)}
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
