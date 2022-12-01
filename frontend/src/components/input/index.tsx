import { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

import InputContainer from './style';
import ReactInputMask from 'react-input-mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register?: any;
    Icon: IconType;
    placeholder: string;
    type: string;
    mask?: string;
}

const Input = ({ Icon, placeholder, type, mask, ...rest }: InputProps) => (
    <InputContainer>
        {mask ? (
            <ReactInputMask
                placeholder={placeholder}
                type={type}
                required
                mask={mask}
            />
        ) : (
            <input placeholder={placeholder} type={type} required />
        )}
        <span className="material-symbols-outlined">
            <Icon />
        </span>
    </InputContainer>
);

export default Input;
