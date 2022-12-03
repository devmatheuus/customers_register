import styled from 'styled-components';

const StyledAddUserCircle = styled.button`
    position: absolute;
    height: 80px;
    width: 80px;
    bottom: 15px;
    right: 25px;

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #3284ce;
    border-radius: 50%;

    svg {
        color: #f9f9f9;
        font-size: 55px;
    }
`;

export default StyledAddUserCircle;
