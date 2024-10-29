import { FC, PropsWithChildren } from 'react';
import { StyledTable } from './Table.style';
interface TableColumn {
	key: string;
	label: string;
	render?: (data: any) => React.ReactNode;
  }
  
  interface TableProps extends PropsWithChildren {
	columns: TableColumn[];
	data: any[];
  }

export const Table: FC<TableProps> = ({ columns,data,children}) => {
	return (
		<StyledTable data-testid="Table">
			<thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key]) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
        {children}
      </tbody>
		</StyledTable>
	);
};

