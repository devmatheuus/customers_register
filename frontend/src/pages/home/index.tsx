import { Sidebar } from '../../components/sidebar/index';
import { UseHome } from '../../providers/home/index';
import { UseAuth } from '../../providers/auth/index';
import { useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import './styles.css';
import maskPhone from '../../utils/maskPhone';
import AddUser from '../../components/addUser/index';
import CreateUserModal from '../../components/createUserModal/index';
import DeleteUserModal from 'components/deleteUserModal';

const HomePage = () => {
    const { setShowDeleteUserModal, showDeleteUserModal } = UseHome();
    const { token } = UseAuth();
    const {
        listOwnerContacts,
        contacts,
        showCreateUserModal,
        setCurrentContactId,
        currentContactId,
    } = UseHome();

    useEffect(() => {
        listOwnerContacts(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(currentContactId);

    const handleContactId = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const contactId = event.currentTarget.parentElement!.parentElement!.id;

        setCurrentContactId(contactId);
    };

    return (
        <>
            {showCreateUserModal && <CreateUserModal />}
            {showDeleteUserModal && <DeleteUserModal />}
            <Sidebar />

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
                                            setShowDeleteUserModal(true);
                                        }}
                                    >
                                        deletar{' '}
                                    </button>
                                </td>
                                <td>
                                    <button> editar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <AddUser />
        </>
    );
};

export default HomePage;
