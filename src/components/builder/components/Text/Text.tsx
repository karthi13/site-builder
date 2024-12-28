import { Text as TextComp } from '@mantine/core';
type TextProps = {
	text: string;
}

const Text: React.FC<TextProps> = ({ text }) => (
	<TextComp size="md">{text}</TextComp>
);

export default Text;
