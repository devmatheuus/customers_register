import { AiOutlineHome } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const menuItems = [
    { name: 'Início', icon: AiOutlineHome },
    {
        name: 'Conta',
        icon: MdLockOutline,
        items: [],
    },
    { name: 'Gerar PDF', icon: AiOutlineFilePdf },
    { name: 'Sair', icon: BiLogOut },
];

export default menuItems;
