import { Button as ButtonComp } from '@mantine/core';

type ButtonProps = {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
	<ButtonComp variant="default">{label}</ButtonComp>
)

export default Button;
