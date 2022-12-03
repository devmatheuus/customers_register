import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

import Icon from 'components/Icon';

interface ButtonProps {
    onClick: (item: string) => void;
    name: string;
    icon?: IconType;
    isActive: boolean;
    hasSubNav?: boolean;
}

const NavButton = ({
    onClick,
    name,
    icon,
    isActive,
    hasSubNav,
}: ButtonProps) => (
    <button
        type="button"
        onClick={() => onClick(name)}
        className={isActive ? 'active' : ''}
    >
        {icon && <Icon Icon={icon} />}
        <span>{name}</span>
        {hasSubNav && <Icon Icon={isActive ? IoIosArrowDown : IoIosArrowUp} />}
    </button>
);

export default NavButton;