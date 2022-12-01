import styled from 'styled-components';

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 10px;

    > span {
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        left: 0;
        font-size: 2.2rem;
        pointer-events: none;
        color: rgb(255 255 255 / 40%);
    }

    > input {
        padding: 0 24px 0 36px;
        border-bottom: 2px solid #2b3442;
        color: rgb(255 255 255 / 96%);
        height: 50px;
        background: transparent;
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
