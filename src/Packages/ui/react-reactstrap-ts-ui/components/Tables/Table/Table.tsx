import type { CSSProperties, ReactElement } from 'react';

import { Table as ReactstrapTable } from 'reactstrap';

type Item = string | number;

interface Row {
    id: number;
    items: Array<Item>;
}

interface Props {
    className?: string | undefined;
    data: Array<Row>;
    headers: Array<string>;
    onRowClick: (row: any) => void;
    style?: CSSProperties;
}

export const Table = ({
    className,
    data = [],
    headers = [],
    onRowClick,
    style,
    ...rest
}: Props): ReactElement => (
    <ReactstrapTable
        hover
        className={className ? `className` : ``}
        style={{
            cursor: 'pointer',
            ...style
        }}
        {...rest}
    >
        {
            (headers && headers.length !== 0) && (
                <thead>
                    <tr>
                        {
                            headers?.map((header: string, index: number) => (
                                <th
                                    key={index}
                                >
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
            ) 
        }
        {
            (data && data.length !== 0) && (
                <tbody>
                    {
                        data?.map((row: Row) => (                           
                            <tr key={row.id} onClick={() => onRowClick(row)}>
                                {
                                    row?.items?.map((item: Item, index: number) => (
                                        <td key={index}>{item}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            )
        }
    </ReactstrapTable>
);
