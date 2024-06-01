'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import payStubOptions from '@/data/payStubOptions';
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Textarea from '@/components/Textarea';
import FlexBox from '@/components/FlexBox';
import { AiOutlineDollar } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

export interface PayStubCorrectFormProps {
  correctDate?: string;
  correctReason?: string;
}

function PayStubCorrectForm({
  correctDate,
  correctReason,
}: PayStubCorrectFormProps) {
  const router = useRouter();
  const initialState = useMemo(
    () => ({
      name: '홍길동',
      dept: '프론트 엔드',
      position: '사장',
      requestDate: '2024-05-30',
      correctDate: correctDate || '',
      correctReason: correctReason || '',
      correctPay: '',
      detail: '',
    }),
    [correctDate, correctReason],
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <FlexBox>
        <AiOutlineDollar size="1.5rem" />
        <div className="text-2xl font-bold ml-1">급여 내역 정정 신청</div>
      </FlexBox>
      <form
        className="max-w-5xl h-[48rem] border border-violet-300 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input text="이름" value="홍길동" readOnly {...register('name')} />
        <Input text="부서" value="프론트 엔드" readOnly {...register('dept')} />
        <Input text="직책" value="사장" readOnly {...register('position')} />
        <Input
          type="date"
          text="신청 날짜"
          value="2024-05-30"
          readOnly
          {...register('requestDate')}
        />
        <Input
          text="정정 날짜"
          description="정정 날짜를 선택해주세요"
          type="month"
          {...register('correctDate', {
            required: '정정 날짜를 선택해주세요',
          })}
          error={errors.correctDate?.message}
        />
        <Select
          text="정정 사유"
          description="정정 사유를 선택해주세요"
          placeholder="아래 사유 중 하나를 선택해주세요"
          options={payStubOptions}
          {...register('correctReason', {
            required: '정정 사유를 선택해주세요',
          })}
          error={errors.correctReason?.message}
        />
        <Input
          type="number"
          text="정정 액수"
          description="정정 액수를 입력해주세요 (단위: 원)"
          placeholder="ex) 1000000"
          {...register('correctPay', {
            required: '정정 액수를 입력해주세요',
          })}
          error={errors.correctPay?.message}
        />
        <Textarea
          text="세부 내용"
          description="정정 사유가 발생한 정확한 날짜, 정정 사유의 반영 여부를 작성해주세요"
          placeholder="ex) 2024-05-25 휴일 근무 미반영으로 인한 수당 정정 신청"
          {...register('detail', {
            required: '세부 내용을 입력해주세요',
          })}
          error={errors.detail?.message}
        />
        <FlexBox gap="oneHalf">
          <Button type="submit">정정 신청</Button>
          <Button intent="reverse" onClick={() => router.back()}>
            정정 취소
          </Button>
        </FlexBox>
      </form>
    </>
  );
}

export default PayStubCorrectForm;