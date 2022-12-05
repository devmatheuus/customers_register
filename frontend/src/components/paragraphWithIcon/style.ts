import styled from 'styled-components';

const Paragraph = styled.p`
    position: relative;

    font-size: 1.8rem;

    margin-bottom: 10px;

    padding: 0 24px 0 16px;
    height: 50px;

    background: transparent;
    color: rgb(255 255 255 / 96%);

    translate: 5% 0;

    span {
        padding: 0 10px;
        position: relative;
        svg {
            position: absolute;

            top: 100%;
            left: -5px;

            translate: 0 -100%;
            pointer-events: none;

            font-size: 2.2rem;

            color: rgb(255 255 255 / 40%);
        }
    }

    &:hover {
        span {
            svg {
                color: #216ce7;
                transition: 0.5s;
            }
        }
    }
`;

export default Paragraph;
