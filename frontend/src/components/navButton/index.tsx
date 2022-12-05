import { IconType } from 'react-icons/lib';

import Icon from 'components/Icon';

interface ButtonProps {
    onClick: (item: string) => void;
    name: string;
    icon?: IconType;
    isActive: boolean;
}

const NavButton = ({ onClick, name, icon, isActive }: ButtonProps) => (
    <button
        type="button"
        onClick={() => onClick(name)}
        className={isActive ? 'active' : ''}
    >
        {icon && <Icon Icon={icon} />}
        <span>{name}</span>
    </button>
);

export default NavButton;
