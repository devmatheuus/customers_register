import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Icon from 'components/Icon';

import SidebarContainer from './styles';
import { Nav } from 'components/nav';

export const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <SidebarContainer>
            <header className="sidebar-header">
                <button type="button" onClick={handleSidebar}>
                    <Icon Icon={AiOutlineMenu} />
                </button>
            </header>
            <aside className={showSidebar ? 'sidebar active' : 'sidebar'}>
                <Nav />
            </aside>
        </SidebarContainer>
    );
};
