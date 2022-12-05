import NavButton from 'components/navButton';
import { useState } from 'react';
import { AiOutlineFilePdf, AiOutlineHome } from 'react-icons/ai';
import { WavyLink } from 'react-wavy-transitions';
import { MdLockOutline } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

export const Nav = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (item: string) => {
        setActiveItem(item !== activeItem ? item : '');
    };

    return (
        <nav>
            <WavyLink to="/home" color="#216ce7">
                <NavButton
                    onClick={handleClick}
                    name="Início"
                    icon={AiOutlineHome}
                    isActive={activeItem === 'Início'}
                />
            </WavyLink>
            <WavyLink to="/account" color="#216ce7">
                <NavButton
                    onClick={handleClick}
                    name="Conta"
                    icon={MdLockOutline}
                    isActive={activeItem === 'Conta'}
                />
            </WavyLink>
            <WavyLink to="/" color="#216ce7">
                <NavButton
                    onClick={handleClick}
                    name="Gerar PDF"
                    icon={AiOutlineFilePdf}
                    isActive={activeItem === 'Gerar PDF'}
                />
            </WavyLink>
            <WavyLink to="/" color="#216ce7">
                <NavButton
                    onClick={() => {
                        localStorage.clear();
                        handleClick('Sair');
                    }}
                    name="Sair"
                    icon={BiLogOut}
                    isActive={activeItem === 'Sair'}
                />
            </WavyLink>
        </nav>
    );
};
