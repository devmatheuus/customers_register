import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

import ButtonContainer from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
    Icon?: IconType;
    content: string;
}

const Button = ({ Icon, content, ...rest }: ButtonProps) => {
    return (
        <ButtonContainer type="submit">
            {content}
            <span className="material-symbols-outlined">
                {Icon && <Icon />}
            </span>
        </ButtonContainer>
    );
};

export default Button;
