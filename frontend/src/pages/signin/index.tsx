import seaOfClouds from 'assets/seaOfClouds.svg';
import SignInContainer from './style';

import { HiOutlineMail } from 'react-icons/hi';
import { BsKey, BsArrowRightShort } from 'react-icons/bs';

import Input from 'components/input';
import Button from 'components/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILoginRequest } from 'interfaces/sessions/index';
import { Span } from '../../components/span/style';
import { WavyLink } from 'react-wavy-transitions';
import SessionContainer from 'components/sessionContainer';
import signinSchema from 'schemas/signin';
import { UseAuth } from 'providers/auth';

const SignInPage = () => {
    const { signin } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginRequest>({
        resolver: zodResolver(signinSchema),
    });

    const handleForm = (data: ILoginRequest) => {
        signin(data);
    };

    return (
        <SignInContainer className="md-box">
            <SessionContainer>
                <form onSubmit={handleSubmit(handleForm)} className="form">
                    <h2>Login</h2>
                    <h3>Vamos juntos nessa!</h3>
                    <Input
                        Icon={HiOutlineMail}
                        placeholder="Email"
                        type="text"
                        register={register}
                        name="email"
                    />
                    <Span>{errors.email?.message}</Span>

                    <Input
                        Icon={BsKey}
                        placeholder="Senha"
                        type="password"
                        register={register}
                        name="password"
                    />
                    <Span>{errors.password?.message}</Span>
                    <p>
                        Ainda não se cadastrou?
                        <span>
                            <WavyLink to="/" color="#216ce7">
                                Cadastre-se aqui!
                            </WavyLink>
                        </span>
                    </p>
                    <Button content="Entrar" Icon={BsArrowRightShort} />
                </form>
            </SessionContainer>
            <img className="clouds" src={seaOfClouds} alt="Cloud" />
        </SignInContainer>
    );
};

export default SignInPage;
