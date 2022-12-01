import styled, { keyframes } from 'styled-components';

const clouds = keyframes`
    100% {
        translate: -90vw -55%;
        scale: 1 1.1;
    }
`;

const SignUpContainer = styled.div`
    background: #3284ce;
    font-family: 'Euclid Circular A';

    .clouds {
        position: fixed;
        top: 30%;
        left: 0;
        width: 3000px;
        height: 2000px;
        translate: 0% -50%;
        animation: ${clouds} 25s infinite linear;
    }

    main {
        .form {
            gap: 10px;
        }
    }

    @media (max-width: 500px) {
        .clouds {
            display: none;
        }
    }
`;
export default SignUpContainer;
