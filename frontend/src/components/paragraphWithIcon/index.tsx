import { IconType } from 'react-icons/lib';
import Paragraph from './style';

interface IComponentProps {
    Icon: IconType;
    content: string;
}

const ParagraphWithIcon = ({ content, Icon }: IComponentProps) => {
    return (
        <Paragraph>
            <span>{<Icon />}</span>
            {content}
        </Paragraph>
    );
};

export default ParagraphWithIcon;
