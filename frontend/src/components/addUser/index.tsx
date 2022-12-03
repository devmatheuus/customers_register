import StyledAddUserCircle from './style';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { UseHome } from 'providers/home';

const AddUser = () => {
    const { setShowCreateUserModal } = UseHome();

    return (
        <StyledAddUserCircle onClick={() => setShowCreateUserModal(true)}>
            <AiOutlineUserAdd size={25} />
        </StyledAddUserCircle>
    );
};

export default AddUser;
