import { FC, PropsWithChildren } from 'react';
import { StyledAlert } from './Alert.style';

type AlertProps = {
	type?: 'success' | 'info' | 'warning' | 'error';
}

export const Alert: FC<PropsWithChildren<AlertProps>> = ({ type, children }) => {
	return (
		<StyledAlert data-testid="Alert" type={type ?? 'info'}>
			{children}
		</StyledAlert>
	);
};
