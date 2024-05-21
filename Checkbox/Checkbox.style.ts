import styled from 'styled-components';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';
import { readableColor, shade } from 'polished';

type StyledButtonProps = {
  $color: ThemeColor;
  $appearance: ThemeElementAppearance;
  $size: ThemeElementSize;
};

export const StyledCheckbox = styled.button<StyledButtonProps>`
  display: inline-block;
  background: ${props => props.theme.colors[props.$color]};
  color: ${props => readableColor(props.theme.colors[props.$color])};
  appearance: none;
  border: 0;
  border-radius: 0.25rem; 
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${props => props.theme.fontSizes.sm};

  // Handle appearance
  ${props => {
    if (props.$appearance === 'outline') {
      return `
        background: transparent;
        color: ${props.theme.colors[props.$color]};
        border: 1px solid ${props.theme.colors[props.$color]};
      `;
    }
  }};

  // Handle sizes 
  ${props => {
    if (props.$size === 'sm') {
      return `
        width: 1rem;
        height: 1rem;
      `;
    }
    if (props.$size === 'lg') {
      return `
        width: 2rem;
        height: 2rem;
      `;
    }
    return `
      width: 1.5rem;
      height: 1.5rem;
    `;
  }};

  &:hover, &:focus, &:active {
    text-decoration-color: currentColor;
    color: ${props => readableColor(props.theme.colors[props.$color])};
    
    ${props => props.$appearance === 'outline' ? `
      background: ${props.theme.colors[props.$color]};
    ` : `
      background: ${shade(0.15, props.theme.colors[props.$color])};
    `}
  }
`;