import StyledAddUserCircle from './style';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { UseHome } from 'providers/home';

const AddUser = () => {
    const { setShowCreateContactModal } = UseHome();

    return (
        <StyledAddUserCircle onClick={() => setShowCreateContactModal(true)}>
            <AiOutlineUserAdd size={25} />
        </StyledAddUserCircle>
    );
};

export default AddUser;
