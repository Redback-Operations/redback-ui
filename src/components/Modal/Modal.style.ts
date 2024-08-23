import styled from 'styled-components';
import { getLuminance, shade, tint } from 'polished';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid #000;
  box-shadow: 24px;
  padding: ${props => props.theme.spacing.md};
  z-index: 1000;

  /* Adjust background based on theme */
  background: ${props => {
    const isDark = getLuminance(props.theme.colors.background) < 0.5;
    return isDark ? tint(0.1, props.theme.colors.background) : 'white';
  }};

  h2 {
    margin: 0;
    font-size: ${props => props.theme.fontSizes.lg};
  }

  p {
    margin-top: ${props => props.theme.spacing.sm};
    margin-bottom: 0;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => {
      const isDark = getLuminance(props.theme.colors.background) < 0.5;
      return isDark ? tint(0.1, props.theme.colors.text) : shade(0.2, props.theme.colors.text);
    }};
  }
`;
