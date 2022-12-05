import styled from 'styled-components';

const SidebarContainer = styled.div`
    button {
        background: transparent;

        text-align: left;
    }

    .sidebar {
        background: #111820;

        width: 260px;
        z-index: 5;
        height: 100%;
        left: -200%;
        top: 72px;

        position: fixed;
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
        padding: 0 1.25rem 0 25;

        background: #111820;

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
        align-items: center;

        gap: 16px;
        height: 50px;
        width: 100%;
        padding: 0 25px;

        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;

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
