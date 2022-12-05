import { Sidebar } from 'components/sidebar/index';
import Input from 'components/input';
import Button from 'components/button';
import ParagraphWithIcon from 'components/paragraphWithIcon/index';

import { AccountContainer } from './styles';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BsCalendarDate } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';

import { Span } from 'components/span/style';

import Carousel from 'react-bootstrap/Carousel';

import { useState, useEffect } from 'react';

import './style.css';

import { UseAuth } from 'providers/auth';
import { UseAccount } from 'providers/account/index';

import jwt_decode from 'jwt-decode';
import { mask, unMask } from 'remask';

import updateUserSchema from 'schemas/updateUser/index';
import { IUpdateContact } from 'interfaces/contacts/index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ITokenPayload {
    customerId: string;
    exp: number;
    iat: number;
    sub: string;
}

const AccountPage = () => {
    const { token, authenticated } = UseAuth();
    const navigate = useNavigate();

    const { accountData, listAccount, updateUser } = UseAccount();

    let tokenPayload: ITokenPayload;
    if (token) {
        tokenPayload = jwt_decode(token);
    }

    useEffect(() => {
        if (!authenticated) {
            toast.info('Faça login novamente');
            return navigate('/signin');
        }

        listAccount(token, tokenPayload.customerId);
    }, []);

    const { fullname, email, phone, createdAt } = accountData;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateContact>({
        resolver: zodResolver(updateUserSchema),
    });

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const handleForm = (data: IUpdateContact) => {
        const formateData = Object.fromEntries(
            Object.entries(data).filter(([o, v]) => v !== '')
        );

        if (formateData.phone) {
            formateData.phone = unMask(formateData.phone);
        }

        updateUser(token, formateData, tokenPayload.customerId);
    };

    return (
        <>
            <Sidebar />
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="container"
                interval={null}
            >
                <Carousel.Item className="user-datas">
                    <AccountContainer>
                        <div>
                            <h3>Minhas Informações</h3>

                            <div>
                                <ParagraphWithIcon
                                    Icon={BiUserCircle}
                                    content={`Nome: ${fullname}`}
                                />
                                <ParagraphWithIcon
                                    Icon={HiOutlineMail}
                                    content={`Nome: ${email}`}
                                />

                                <ParagraphWithIcon
                                    Icon={BsPhone}
                                    content={`Telefone: ${
                                        phone &&
                                        mask(phone, ['(99) 99999-9999'])
                                    }`}
                                />
                                <ParagraphWithIcon
                                    Icon={BsCalendarDate}
                                    content={`Criado em: ${new Date(
                                        createdAt
                                    ).toLocaleString()}`}
                                />
                            </div>
                        </div>
                    </AccountContainer>
                </Carousel.Item>
                <Carousel.Item>
                    <AccountContainer>
                        <h3>Alterar informações</h3>
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
                                placeholder={
                                    phone && mask(phone, ['(99) 99999-9999'])
                                }
                                name="phone"
                                type="text"
                                mask="(99) 99999-9999"
                            />
                            <Span>{errors.phone?.message}</Span>

                            <Button content="Atualizar" />
                        </form>
                    </AccountContainer>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default AccountPage;
