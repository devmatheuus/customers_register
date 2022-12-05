import cloud from 'assets/cloud.svg';
import SignUpContainer from './style';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsKey, BsPhone, BsArrowRightShort } from 'react-icons/bs';

import Input from 'components/input';
import Button from 'components/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ICreateAccountRequest } from 'interfaces/sessions/index';

import { Span } from 'components/span/style';
import SessionContainer from 'components/sessionContainer';

import { WavyLink } from 'react-wavy-transitions';

import { UseAuth } from 'providers/auth/index';
import signupSchema from 'schemas/signup';

const SignUpPage = () => {
    const { signup } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateAccountRequest>({
        resolver: zodResolver(signupSchema),
    });

    const handleForm = (data: ICreateAccountRequest) => {
        signup(data);
    };

    return (
        <SignUpContainer className="md-box">
            <img className="clouds" src={cloud} alt="Cloud" />
            <SessionContainer>
                <form onSubmit={handleSubmit(handleForm)} className="form">
                    <h2>Registro</h2>
                    <h3>Rápido e fácil</h3>
                    <Input
                        Icon={BiUserCircle}
                        placeholder="Nome completo"
                        type="text"
                        register={register}
                        name="fullname"
                    />
                    {<Span>{errors.name?.message}</Span>}

                    <Input
                        Icon={HiOutlineMail}
                        placeholder="Email"
                        type="text"
                        register={register}
                        name="email"
                    />
                    {<Span>{errors.email?.message}</Span>}

                    <Input
                        Icon={BsKey}
                        placeholder="Senha"
                        type="password"
                        register={register}
                        name="password"
                    />
                    {<Span>{errors.password?.message}</Span>}

                    <Input
                        Icon={BsPhone}
                        placeholder="Celular"
                        type="text"
                        mask="(99) 99999-9999"
                        register={register}
                        name="phone"
                    />
                    {<Span>{errors.phone?.message}</Span>}

                    <p>
                        Já possui uma conta?
                        <span>
                            <WavyLink
                                to="/signin"
                                color="#216ce7"
                                direction="up"
                            >
                                Entre!
                            </WavyLink>
                        </span>
                    </p>
                    <Button content="Cadastrar" Icon={BsArrowRightShort} />
                </form>
            </SessionContainer>
        </SignUpContainer>
    );
};

export default SignUpPage;
