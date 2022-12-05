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

interface ITokenPayload {
    customerId: string;
    exp: number;
    iat: number;
    sub: string;
}

const AccountPage = () => {
    const { token } = UseAuth();
    // const { currentContactId } = UseHome();
    const { accountData, listAccount } = UseAccount();

    const tokenPayload: ITokenPayload = jwt_decode(token);

    useEffect(() => {
        listAccount(token, tokenPayload.customerId);
    }, []);

    console.log(accountData);

    const { fullname, email, phone, createdAt } = accountData;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // resolver: zodResolver(signinSchema),
    });

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
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
                        <form>
                            <Input
                                register={register}
                                Icon={BiUserCircle}
                                placeholder={'fullname'}
                                name="fullname"
                                type="text"
                            />
                            {/* <Span>{errors.fullname?.message}</Span> */}

                            <Input
                                register={register}
                                Icon={HiOutlineMail}
                                placeholder={'email'}
                                name="email"
                                type="text"
                            />
                            {/* <Span>{errors.email?.message}</Span> */}

                            <Input
                                register={register}
                                Icon={BsPhone}
                                placeholder={''}
                                name="phone"
                                type="text"
                                mask="(99) 99999-9999"
                            />
                            {/* <Span>{errors.phone?.message}</Span> */}

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
