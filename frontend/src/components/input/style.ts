import styled from 'styled-components';

const InputContainer = styled.div`
    position: relative;

    margin-bottom: 10px;

    > span {
        position: absolute;

        top: 50%;
        left: 0;

        translate: 0 -50%;
        pointer-events: none;

        font-size: 2.2rem;

        color: rgb(255 255 255 / 40%);
    }

    > input {
        padding: 0 24px 0 36px;
        height: 50px;

        border-bottom: 2px solid #2b3442;

        background: transparent;
        color: rgb(255 255 255 / 96%);
    }

    input:focus {
        transition: 0.5s;

        border-color: #216ce7;
    }

    input:focus ~ span > svg {
        color: #216ce7;

        transition: 0.5s;
    }
`;

export default InputContainer;
