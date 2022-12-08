import { useEffect } from 'react';

import { Sidebar } from 'components/sidebar/index';
import CreateContactModal from 'components/createContactModal';
import DeleteContactModal from 'components/deleteContactModal';
import UpdateContactModal from 'components/updateContactModal';
import AddUser from 'components/addUser/index';

import { UseHome } from 'providers/home/index';
import { UseAuth } from 'providers/auth/index';

import { useNavigate } from 'react-router-dom';
import ContactTable from 'components/contactTable';
import NoContacts from 'components/noContacts';

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
        showUpdateContactModal,
    } = UseHome();

    useEffect(() => {
        listOwnerContacts(token);
    }, []);

    return (
        <>
            {showCreateContactModal && <CreateContactModal />}
            {showDeleteContactModal && <DeleteContactModal />}
            {showUpdateContactModal && <UpdateContactModal />}
            <Sidebar />

            {contacts.length ? <ContactTable /> : <NoContacts />}

            <AddUser />
        </>
    );
};

export default HomePage;
