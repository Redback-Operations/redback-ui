import styled from 'styled-components';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';
import { readableColor, shade } from 'polished';

type StyledSwitch = {
	$color: ThemeColor;
	$appearance: ThemeElementAppearance;
	$size: ThemeElementSize
}
export const StyledSwitch = styled.button<StyledSwitch>`
	display: inline-block;
	background: ${props => props.theme.colors[props.$color]};
	color: ${props => readableColor(props.theme.colors[props.$color])};
	appearance: none;
	border: 0;
	border-radius: 3rem;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: ${props => props.theme.fontSizes.sm};
	// Handle appearance
	${props => {
		if(props.$appearance === 'outline') {
			return `
				background: transparent;
				color: ${props.theme.colors[props.$color]};
				border: 1px solid ${props.theme.colors[props.$color]};
			`;
		}
	}};
	// Handle sizes
	${props => {
		if(props.$size === 'sm') {
			return `
                width: 1.5rem;
                height: 1rem;
			`;
		}
		if(props.$size === 'lg') {
			return `
                width: 4rem;
                height: 1rem;
			`;
		}
		return `
            width: 2.5rem;
            height: 1rem;
		`;
	}};

	&:hover, &:focus, &:active {
		text-decoration-color: currentColor;
		color: ${props => readableColor(props.theme.colors[props.$color])};
		
		${props => props.$appearance === 'outline' ? `
				background: ${props.theme.colors[props.$color]};
			` : `
				background: ${shade(0.15, props.theme.colors[props.$color])};
			`
}};
	}
`;
