import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import menuItems from './menuItems';

import Icon from 'components/Icon';
import NavButton from 'components/navButton';
import SubMenu from 'components/subMenu';

import SidebarContainer from './styles';

export const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () => setShowSidebar(!showSidebar);

    const handleClick = (item: string) => {
        setActiveItem(item !== activeItem ? item : '');
    };

    return (
        <SidebarContainer>
            <header className="sidebar-header">
                <button type="button" onClick={handleSidebar}>
                    <Icon Icon={AiOutlineMenu} />
                </button>
            </header>
            <aside className={showSidebar ? 'sidebar active' : 'sidebar'}>
                {menuItems.map((item) => (
                    <>
                        {!item.items && (
                            <NavButton
                                onClick={handleClick}
                                name={item.name}
                                icon={item.icon}
                                isActive={activeItem === item.name}
                                hasSubNav={!!item.items}
                            />
                        )}
                        {item.items && (
                            <>
                                <NavButton
                                    onClick={handleClick}
                                    name={item.name}
                                    icon={item.icon}
                                    isActive={activeItem === item.name}
                                    hasSubNav={!!item.items}
                                />
                                <SubMenu
                                    activeItem={activeItem}
                                    handleClick={handleClick}
                                    item={item}
                                />
                            </>
                        )}
                    </>
                ))}
            </aside>
        </SidebarContainer>
    );
};
