import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const ContainerModal = styled.div`
    height: 100%;
    width: 100%;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    background: rgba(0, 0, 0, 0.7);

    z-index: 10;
    overflow: hidden;

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 22px;
        width: 369px;
        height: auto;
        padding: 20px;

        overflow-y: auto;

        background: #111820;

        position: relative;

        box-shadow: 0px 4px 40px -10px #3284ce;
        border-radius: 4px;

        animation: ${appearFromRight} 1s;

        .header-controls {
            display: flex;
            justify-content: space-between;

            width: 100%;

            h2 {
                color: #f9f9f9;
            }

            button {
                background: transparent;

                width: 0%;
                padding: 2% 15px;

                svg {
                    color: #f9f9f9;

                    transform: translateY(-6px);
                }
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        gap: 5px;

        button {
            width: 100%;
            padding: 15px;

            justify-content: center;
            font-size: 1.5rem;
        }

        div {
            width: 100%;
            input {
                width: 100%;
            }
        }
    }
`;
