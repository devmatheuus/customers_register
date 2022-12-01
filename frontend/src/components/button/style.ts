import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 0 24px;

    border-radius: 6px;
    border: 0;

    background: #216ce7;
    color: #f9f9f9;

    font-family: inherit;
    font-weight: 600;

    span {
        svg {
            width: 25px;
            height: 25px;
            vertical-align: center;
        }
    }
`;

export default ButtonContainer;
