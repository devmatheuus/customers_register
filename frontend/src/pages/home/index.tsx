import { Sidebar } from '../../components/sidebar/index';
import { UseHome } from '../../providers/home/index';
import { UseAuth } from '../../providers/auth/index';
import { useEffect } from 'react';

import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { FaUserEdit, FaUserSlash } from 'react-icons/fa';

import Table from 'react-bootstrap/Table';
import './styles.css';
import maskPhone from '../../utils/maskPhone';

const HomePage = () => {
    const { token } = UseAuth();
    const { listOwnerContacts, contacts } = UseHome();

    useEffect(() => {
        listOwnerContacts(token);
    }, []);

    console.log(contacts);

    return (
        <>
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
                            <tr>
                                <td>{contact.fullname}</td>
                                <td>{contact.email}</td>
                                <td>{maskPhone(contact.phone)}</td>
                                <td>
                                    <button>deletar </button>
                                </td>
                                <td>
                                    <button> editar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
};

export default HomePage;
