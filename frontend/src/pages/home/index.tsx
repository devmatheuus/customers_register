import React, { useEffect } from 'react';

import { Sidebar } from 'components/sidebar/index';
import CreateContactModal from 'components/createContactModal';
import DeleteContactModal from 'components/deleteContactModal';
import UpdateContactModal from 'components/updateContactModal';
import AddUser from 'components/addUser/index';

import { UseHome } from 'providers/home/index';
import { UseAuth } from 'providers/auth/index';

import Table from 'react-bootstrap/Table';

import './styles.css';

import maskPhone from 'utils/maskPhone';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { token, authenticated } = UseAuth();
    const navigate = useNavigate();

    if (!authenticated) {
        navigate('/');
    }

    const {
        listOwnerContacts,
        contacts,
        showCreateContactModal,
        showDeleteContactModal,
        setCurrentContactId,
        setShowDeleteContactModal,
        showUpdateContactModal,
        setShowUpdateContactModal,
    } = UseHome();

    useEffect(() => {
        listOwnerContacts(token);
    }, []);

    const handleContactId = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const contactId = event.currentTarget.parentElement!.parentElement!.id;

        setCurrentContactId(contactId);
    };

    return (
        <>
            {showCreateContactModal && <CreateContactModal />}
            {showDeleteContactModal && <DeleteContactModal />}
            {showUpdateContactModal && <UpdateContactModal />}
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
            <AddUser />
        </>
    );
};

export default HomePage;
