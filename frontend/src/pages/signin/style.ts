import styled, { keyframes } from 'styled-components';

const clouds = keyframes`
    100% {
        translate: -90vw -55%;
        scale: 2 1.1;
    }
`;

const SignInContainer = styled.div`
    background: #3284ce;
    font-family: 'Euclid Circular A';

    display: flex;
    flex-direction: row-reverse;

    .clouds {
        position: fixed;

        top: 0;
        left: 0;
        width: 2000px;
        height: 2500px;

        translate: 0% -35%;
        animation: ${clouds} 25s infinite linear;
    }

    main {
        position: static;

        height: 100vh;

        .form {
            gap: 15px;
        }
    }

    @media (max-width: 500px) {
        .clouds {
            display: none;
        }
    }
`;
export default SignInContainer;
