import styled from 'styled-components';

export const AccountContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: 500px;
    padding: 15px;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    h3 {
        text-align: center;

        color: #f9f9f9;
    }

    > div:first-child {
        width: 100%;
        padding: 5px;
        gap: 25px;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        > div {
            width: 100%;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 15px;
        width: 100%;

        div {
            width: 100%;

            input {
                width: 100%;
            }
        }
        button {
            width: 100%;
            padding: 5px 0px;

            display: flex;
            justify-content: center;

            font-size: 2rem;
        }
    }
`;
