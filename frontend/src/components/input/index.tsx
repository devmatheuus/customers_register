import { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

import InputContainer from './style';
import ReactInputMask from 'react-input-mask';

import { UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    Icon: IconType;
    placeholder: string;
    type: string;
    mask?: string;
    name: string;
}

const Input = ({
    Icon,
    placeholder,
    type,
    mask,
    register,
    name,
    ...rest
}: InputProps) => (
    <InputContainer>
        {mask ? (
            <ReactInputMask
                placeholder={placeholder}
                type={type}
                mask={mask}
                required
                {...register(name)}
            />
        ) : (
            <input
                placeholder={placeholder}
                type={type}
                required
                {...register(name)}
            />
        )}
        <span className="material-symbols-outlined">
            <Icon />
        </span>
    </InputContainer>
);

export default Input;
