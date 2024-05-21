import { FC } from 'react';
import { StyledCheckbox } from './Checkbox.style';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';

type CheckboxProps = {
	color?: ThemeColor;
	onClick: () => void;
	appearance?: ThemeElementAppearance;
	size?: ThemeElementSize;
}

const Checkbox: FC<CheckboxProps> = ({
	color = 'primary',
	onClick,
	appearance = 'solid',
	size = 'md'
}) => {
	return (
		<StyledCheckbox data-testid="Checkbox" onClick={onClick} $color={color} $appearance={appearance} $size={size}>
			{}
		</StyledCheckbox>
	);
};

export default Checkbox;
