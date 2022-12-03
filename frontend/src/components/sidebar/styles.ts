import styled from 'styled-components';

const SidebarContainer = styled.div`
    button {
        background: transparent;
        text-align: left;
    }

    .sidebar {
        background: #111820;
        width: 260px;
        height: 100%;
        position: fixed;
        top: 72px;
        left: -200%;
        transition: 850ms;
        border-right: 1px solid #3284ce;
    }

    .sidebar.active {
        left: 0;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        height: 72px;
        width: 100%;
        background: #111820;
        padding: 0 1.25rem 0 25;
        border-bottom: 1px solid #3284ce;
    }

    .sidebar-header button {
        width: 64px;
        padding: 0 25px;

        color: #f9f9f9;
    }

    .sidebar button {
        position: relative;
        display: flex;
        gap: 16px;
        align-items: center;
        height: 50px;
        width: 100%;
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        padding: 0 25px;
        color: #f9f9f9;
    }

    .sidebar button span:nth-child(2) {
        flex: 1 1 auto;
    }

    .sidebar button.active {
        background: #3284ce;
        color: #f9f9f9;

        transition: 0.5s;
    }
`;

export default SidebarContainer;
