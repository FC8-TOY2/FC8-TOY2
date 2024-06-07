import { Row } from '@/types';
import Item from './Item';
import ItemHead from './ItemHead';

interface TableProps {
  rows: Row[];
  tableType: string;
}

const Table: React.FC<TableProps> = ({ rows, tableType }) => {
  return (
    <ul className="border border-gray-300 border-solid border-b-0">
      <ItemHead tableType={tableType} />
      {rows.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item row={row} key={index} tableType={tableType} />
      ))}
    </ul>
  );
};

export default Table;
