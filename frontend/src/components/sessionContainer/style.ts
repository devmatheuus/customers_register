import styled, { keyframes } from 'styled-components';

const clouds = keyframes`
    100% {
        translate: -90vw -55%;
        scale: 1 1.1;
    }
`;

const StyledSessionContainer = styled.main`
    font-family: 'Euclid Circular A';

    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 60%;
    background: #111820;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button,
    input {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        width: 100%;
        height: 60px;
        font-family: inherit;
        font-size: 1.6rem;
    }

    .clouds {
        position: fixed;
        top: 30%;
        left: 0;
        width: 3000px;
        height: 2000px;
        translate: 0% -50%;
        animation: ${clouds} 25s infinite linear;
    }

    .form > h2 {
        margin: 0 0 6px;
        color: rgb(255 255 255 / 96%);
    }

    .form > h3 {
        margin: 0 0 6px;
        color: rgb(255 255 255 / 40%);
    }

    .form {
        margin: 0;
        display: grid;
        gap: 15px;
        padding: 15px 0px;
        width: 80%;
    }

    p {
        color: #778395;
        display: flex;

        gap: 5px;

        align-items: center;
    }

    p > span {
        color: #216ce7;
        height: 0;
        transform: translateY(-30px);
    }

    @media (max-width: 500px) {
        .clouds {
            display: none;
        }

        & {
            width: 100%;
        }
    }
`;

export default StyledSessionContainer;
