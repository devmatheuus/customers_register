import styled from 'styled-components';

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    padding: 5px;
    gap: 15px;

    .container-image {
        width: 100%;
        max-width: 450px;
        padding: 25px;

        img {
            width: 100%;
        }
    }
    p {
        transform: translateY(-60px);
        text-align: center;
        font-size: 2rem;
        font-weight: bolder;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: #f9f9f9;
    }
    button {
        border-radius: 6px;

        background: #216ce7;
        color: #f9f9f9;

        transform: translateY(-50px);
        padding: 20px 20px;

        font-weight: 600;
        font-size: 1.4rem;
    }
`;
