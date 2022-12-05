import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons/lib';

import ReactInputMask from 'react-input-mask';
import InputContainer from './style';

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
                {...register(name)}
            />
        ) : (
            <input placeholder={placeholder} type={type} {...register(name)} />
        )}
        <span className="material-symbols-outlined">
            <Icon />
        </span>
    </InputContainer>
);

export default Input;
