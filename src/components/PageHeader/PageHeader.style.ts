import styled from 'styled-components';
import { ThemeElementSize, ThemeColor } from '../../types';
import { readableColor, shade } from 'polished';

type StyledPageHeaderProps = {
	$size: ThemeElementSize;
    $color: ThemeColor;
};

export const StyledPageHeader = styled.header<StyledPageHeaderProps>`
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: ${props => (props.$size === 'sm' ? '600px' : '1200px')};
        height: ${props => props.$size === 'sm' ? props.theme.spacing.xl : props.theme.spacing.xxl};
        padding: ${props => props.$size === 'sm' ? props.theme.spacing.sm : props.theme.spacing.md};
        margin: 0 auto;
        background-color: ${props => props.theme.colors[props.$color]};
        color: ${props => readableColor(props.theme.colors[props.$color])};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .logo-container {
        flex-shrink: 0;
    }

    .logo {
        height: 100%;
        max-height: ${props => props.$size === 'sm' ? props.theme.spacing.sm : props.theme.spacing.lg};
        width: auto;
    }

    .menu-container {
        display: flex;
        gap: ${props => props.$size === 'sm' ? props.theme.spacing.sm : props.theme.spacing.md};
    }

    .menu-item {
        all: unset;
        font-size: ${props => props.$size === 'sm' ? props.theme.fontSizes.sm : props.theme.fontSizes.md};
        padding: ${props => props.$size === 'sm' ? props.theme.spacing.xs : props.theme.spacing.sm};
        cursor: pointer;
        transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
        text-decoration: none;
    }

    .menu-item:hover {
        background-color: ${props => shade(0.15, props.theme.colors.primary)};
    }

    .menu-item.active {
        font-weight: ${props => props.theme.fontWeights.bold};
    }
`;
