import IPropChildren from 'interfaces/childrenInterface';
import StyledSessionContainer from './style';

const SessionContainer = ({ children }: IPropChildren) => (
    <StyledSessionContainer>{children}</StyledSessionContainer>
);

export default SessionContainer;
