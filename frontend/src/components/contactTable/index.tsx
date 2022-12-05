import { UseHome } from 'providers/home';
import { Table } from 'react-bootstrap';
import maskPhone from 'utils/maskPhone';
import ContainerContactTable from './style';

const ContactTable = () => {
    const {
        contacts,
        setCurrentContactId,
        setShowDeleteContactModal,
        setShowUpdateContactModal,
    } = UseHome();

    const handleContactId = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const contactId = event.currentTarget.parentElement!.parentElement!.id;

        setCurrentContactId(contactId);
    };

    return (
        <ContainerContactTable>
            <h1 className="title">Informações dos contatos relacionados</h1>
            <Table
                striped
                responsive="xl"
                size="xl"
                className="table"
                bordered
                hover
                variant="dark"
            >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 &&
                        contacts.map((contact) => (
                            <tr id={contact.id}>
                                <td>{contact.fullname}</td>
                                <td>{contact.email}</td>
                                <td>{maskPhone(contact.phone)}</td>
                                <td>
                                    <button
                                        onClick={(event) => {
                                            handleContactId(event);
                                            setShowDeleteContactModal(true);
                                        }}
                                    >
                                        deletar{' '}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={(event) => {
                                            handleContactId(event);
                                            setShowUpdateContactModal(true);
                                        }}
                                    >
                                        {' '}
                                        editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </ContainerContactTable>
    );
};

export default ContactTable;
