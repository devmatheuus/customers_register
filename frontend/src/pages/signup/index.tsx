import cloud from 'assets/cloud.svg';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsKey, BsPhone, BsArrowRightShort } from 'react-icons/bs';
import SignUpContainer from './style';
import Input from 'components/input';
import Button from 'components/button';

const SignUpPage = () => {
    return (
        <SignUpContainer className="md-box">
            <img className="clouds" src={cloud} alt="Cloud" />
            <div className="singup">
                <form className="form">
                    <h2>Registro</h2>
                    <h3>Rápido e fácil</h3>
                    <Input
                        Icon={BiUserCircle}
                        placeholder="Nome completo"
                        type="text"
                    />
                    <Input
                        Icon={HiOutlineMail}
                        placeholder="Email"
                        type="email"
                    />
                    <Input Icon={BsKey} placeholder="Senha" type="password" />
                    <Input
                        Icon={BsPhone}
                        placeholder="Celular"
                        type="text"
                        mask="(99) 99999-9999"
                    />
                    <p>
                        Já possui uma conta? <a href="/"> Entre</a>
                    </p>
                    <Button content="Cadastrar" Icon={BsArrowRightShort} />
                </form>
            </div>
        </SignUpContainer>
    );
};

export default SignUpPage;
