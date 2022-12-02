import { useRef } from 'react';
import { IconType } from 'react-icons/lib';

import NavButton from 'components/navButton';
import SubMenuContainer from './styles';

interface Item {
    name: string;
    icon: IconType;
    items: string[];
}

interface SubMenuProps {
    item: Item;
    activeItem: string;
    handleClick: (args0: string) => void;
}

const SubMenu = ({ item, activeItem, handleClick }: SubMenuProps) => {
    const navRef = useRef<HTMLDivElement>(null);

    const isSubNavOpen = (item: string, items: string[]) => {
        return items.some((i) => i === activeItem) || item === activeItem;
    };

    return (
        <SubMenuContainer
            className={`sub-nav ${
                isSubNavOpen(item.name, item.items) ? 'open' : ''
            }`}
            style={{
                height: !isSubNavOpen(item.name, item.items)
                    ? 0
                    : navRef.current?.clientHeight,
            }}
        >
            <div ref={navRef} className="sub-nav-inner">
                {item?.items.map((subItem) => (
                    <NavButton
                        onClick={handleClick}
                        name={subItem}
                        isActive={activeItem === subItem}
                    />
                ))}
            </div>
        </SubMenuContainer>
    );
};

export default SubMenu;
