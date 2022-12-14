import styled from 'styled-components';

const ContainerContactTable = styled.div`
    .table {
        min-width: 500px;
        max-width: 98%;

        margin: 0 auto;
    }

    .title {
        text-align: center;
        font-size: 2.9rem;
        font-weight: 800;

        padding: 15px;

        color: #f9f9f9;
    }

    tr {
        height: 45px;

        vertical-align: middle;
    }

    thead tr {
        font-weight: 800;
        text-align: center;

        color: #3284ce;
    }

    button {
        background: transparent;
        color: #3284ce;

        font-weight: 800;
    }
`;

export default ContainerContactTable;
