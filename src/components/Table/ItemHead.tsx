interface ItemHeadProps {
  tableType: string;
}

const ItemHead: React.FC<ItemHeadProps> = ({ tableType }) => {
  if (tableType === 'salary') {
    return (
      <li className="border-b border-gray-300 bg-gray-100">
        <ul className="h-[60px] flex items-center">
          <li className="flex-1 p-1 px-4">월</li>
          <li className="flex-1 p-1">기본급</li>
          <li className="flex-1 p-1">야근수당</li>
          <li className="flex-1 p-1">휴일근무</li>
          <li className="flex-1 p-1">무급휴가</li>
          <li className="flex-1 p-1">세금</li>
          <li className="flex-1 p-1">실지급액</li>
          <li className="flex-1 p-1">정정신청</li>
        </ul>
      </li>
    );
  }

  if (tableType === 'salaryFix') {
    return (
      <li className="border-b border-gray-300 bg-gray-100">
        <ul className="h-[60px] flex items-center">
          <li className="flex-[1] p-1 px-4">날짜</li>
          <li className="flex-[4] p-1">내용</li>
          <li className="flex-[2] p-1">상태</li>
          <li className="flex-[1] p-1">수정</li>
        </ul>
      </li>
    );
  }

  // 다른 tableType에 따른 헤더 내용 추가 가능
  return null;
};

export default ItemHead;
