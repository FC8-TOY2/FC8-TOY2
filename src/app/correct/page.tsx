import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import payStubOptions from '@/data/payStubOptions';
import React from 'react';

function CorrectPage() {
  return (
    <>
      <Input text="이름" value="홍길동" disabled />
      <Input text="부서" value="프론트 엔드" disabled />
      <Input text="직책" value="사장" disabled />
      <Input text="신청 날짜" value="2024/06" disabled />
      <Input text="정정 날짜" description="정정 날짜를 선택해주세요" />
      <Input
        text="정정 사유"
        description="정정 사유를 선택해주세요"
        placeholder="무급 휴가, 야근, 휴일 근무 등"
      />
      <Select
        text="정정 사유"
        description="정정 사유를 선택해주세요"
        placeholder="아래 사유 중 하나를 선택해주세요"
        options={payStubOptions}
      />
      <Input
        type="number"
        text="정정 액수"
        description="정정 액수를 입력해주세요 (단위: 원)"
        placeholder="ex) 1000000"
      />
      <Button>정정 신청</Button>
      <Button buttonStyle="invert">정정 취소</Button>
    </>
  );
}

export default CorrectPage;
