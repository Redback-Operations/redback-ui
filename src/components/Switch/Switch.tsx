import { FC } from 'react';
import { StyledSwitch } from './Switch.style';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';

type SwitchProps = {
	color?: ThemeColor;
	onClick: () => void;
	appearance?: ThemeElementAppearance;
	size?: ThemeElementSize;
}

const Button: FC<SwitchProps> = ({
	color = 'primary',
	onClick,
	appearance = 'solid',
	size = 'md'
}) => {
	return (
		<StyledSwitch data-testid="Button" onClick={onClick} $color={color} $appearance={appearance} $size={size}>
			{}
		</StyledSwitch>
	);
};

export default Button;
