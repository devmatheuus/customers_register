import { IconType } from 'react-icons/lib';
import IconContainer from './style';

interface IConProp {
    Icon: IconType;
}

const Icon = ({ Icon }: IConProp) => <IconContainer>{<Icon />}</IconContainer>;

export default Icon;
