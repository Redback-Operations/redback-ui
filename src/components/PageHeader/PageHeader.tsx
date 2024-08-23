import { FC } from 'react';
import { StyledPageHeader } from './PageHeader.style';

type PageHeaderProps = {}

export const PageHeader: FC<PageHeaderProps> = () => {
	return (
		<StyledPageHeader data-testid="PageHeader">
			PageHeader Component
		</StyledPageHeader>
	);
};
