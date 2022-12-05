import { Sidebar } from '../../components/sidebar/index';
import { AccountContainer } from './styles';
import { useForm } from 'react-hook-form';
import Input from 'components/input';

import { BsCalendarDate, BsUnlock } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import Button from 'components/button';
import { HiOutlineIdentification } from 'react-icons/hi';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsKey, BsPhone, BsArrowRightShort } from 'react-icons/bs';
import ParagraphWithIcon from '../../components/paragraphWithIcon/index';
import { Span } from '../../components/span/style';

import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import './style.css';
import { UseAuth } from 'providers/auth';
import { UseHome } from 'providers/home';
import { UseAccount } from '../../providers/account/index';
import jwt_decode from 'jwt-decode';
import maskPhone from 'utils/maskPhone';
import { zodResolver } from '@hookform/resolvers/zod';
import updateUserSchema from '../../schemas/updateUser/index';
import { IUpdateContact } from '../../interfaces/contacts/index';

interface ITokenPayload {
    customerId: string;
    exp: number;
    iat: number;
    sub: string;
}

const AccountPage = () => {
    const { token } = UseAuth();
    // const { currentContactId } = UseHome();
    const { accountData, listAccount, updateUser } = UseAccount();

    const tokenPayload: ITokenPayload = jwt_decode(token);

    useEffect(() => {
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
        console.log(formateData.phone);

        if (formateData.phone) {
            formateData.phone = phone.replace(/[^0-9]/g, '');
            console.log(formateData.phone);
        }
        console.log(data);

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
                                        phone && maskPhone(phone)
                                    }`}
                                />
                                <ParagraphWithIcon
                                    Icon={BsCalendarDate}
                                    content={`Criado em: ${createdAt}`}
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
                                placeholder={phone && maskPhone(phone)}
                                name="phone"
                                type="text"
                                mask="(99) 99999-9999"
                            />
                            <Span>{errors.phone?.message}</Span>

                            <Button content="Atualizar" />
                        </form>
                    </AccountContainer>
                </Carousel.Item>
                <Carousel.Item>
                    <AccountContainer>
                        <h3>Apagar conta </h3>

                        <p>Essa ação não poderá ser desfeita</p>
                    </AccountContainer>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default AccountPage;

//
//     /* <form>
//     <Input
//         Icon={BsUnlock}
//         register={register}
//         name="password"
//         placeholder="Insira sua senha atual"
//         type="password"
//     />

//     <Input
//         Icon={BiLockAlt}
//         register={register}
//         name="password"
//         placeholder="Nova senha"
//         type="password"
// //     />

// //     <Button content="Alterar" />
// // </form> */
// // }

// <h3>Alterar dados</h3>

//
