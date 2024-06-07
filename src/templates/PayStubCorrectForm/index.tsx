'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import payStubOptions from '@/data/payStubOptions';
import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Textarea from '@/components/Textarea';
import FlexBox from '@/components/FlexBox';
import { AiOutlineDollar } from 'react-icons/ai';
import { type SubmitHandler, useForm, type FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getCurrentDateInKorea } from '@/utils/time';
import {
  addPayStubCorrection,
  getPayStubCorrection,
  updatePayStubCorrection,
  type PayStubCorrection,
} from '@/db/payStubCorrection';
import { useRecoilValue } from 'recoil';
import { uIdState, userDataState } from '@/recoil/atom';
import { isError } from '@/utils/typeGaurd';

export interface PayStubCorrectFormProps {
  correctDate?: string;
  correctReason?: string;
  id?: string;
}

function PayStubCorrectForm({
  correctDate,
  correctReason,
  id,
}: PayStubCorrectFormProps) {
  const router = useRouter();
  const uid = useRecoilValue(uIdState);

  if (!uid) {
    toast.error('유저를 찾을 수 없습니다.', {
      onClose: () => router.back(),
    });
  }

  const userData = useRecoilValue(userDataState);

  const initialState = useMemo<PayStubCorrection>(
    () => ({
      name: userData?.userName || '',
      dept: userData?.dept || '',
      position: userData?.jobPosition || '',
      requestDate: getCurrentDateInKorea(),
      correctDate: correctDate || '',
      correctReason: correctReason || '',
      correctPay: '',
      detail: '',
    }),
    [correctDate, correctReason, userData],
  );

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialState,
  });

  useEffect(() => {
    if (id) {
      const fetchPayStubCorrection = async () => {
        const response = await getPayStubCorrection(uid, id);

        if (isError(response)) {
          toast.error(response.error, {
            onClose: () => router.back(),
          });
        } else {
          const { payStubCorrection } = response;

          reset({
            name: payStubCorrection.name,
            dept: payStubCorrection.dept,
            position: payStubCorrection.position,
            requestDate: payStubCorrection.requestDate,
            correctDate: payStubCorrection.correctDate,
            correctReason: payStubCorrection.correctReason,
            correctPay: payStubCorrection.correctPay,
            detail: payStubCorrection.detail,
          });
        }
      };
      fetchPayStubCorrection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, id]);

  const onSubmit: SubmitHandler<typeof initialState> = async (data) => {
    try {
      if (id) {
        const response = await updatePayStubCorrection(data, uid, id);
        toast.success(response.message, { onClose: () => router.back() });
      } else {
        const response = await addPayStubCorrection(data, uid);
        toast.success(response.message, { onClose: () => router.back() });
      }
    } catch (error) {
      toast.error('정정 신청에 실패했습니다.');
    }
  };

  const onError = (onErrors: FieldErrors<PayStubCorrection>) => {
    Object.values(onErrors).forEach((error) => toast.error(error?.message));
  };

  return (
    <>
      <FlexBox className="mb-1">
        <AiOutlineDollar size="1.5rem" />
        <div className="text-2xl font-bold ml-1">급여 내역 정정 신청</div>
      </FlexBox>
      <div className="max-w-5xl px-12 py-9 border border-violet-300 rounded-xl">
        <form
          className="mx-auto flex flex-col gap-3.5 w-fit"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FlexBox gap="oneHalf">
            <Input
              text="이름"
              value={initialState.name}
              readOnly
              {...register('name')}
            />
            <Input
              text="부서"
              value={initialState.dept}
              readOnly
              {...register('dept')}
            />
            <Input
              text="직책"
              value={initialState.position}
              readOnly
              {...register('position')}
            />
          </FlexBox>
          <Input
            type="date"
            text="신청 날짜"
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
            state={errors.correctDate ? 'error' : 'default'}
          />
          <FlexBox gap="oneHalf">
            <Select
              text="정정 사유"
              description="정정 사유를 선택해주세요"
              placeholder="아래 사유 중 하나를 선택해주세요"
              options={payStubOptions}
              {...register('correctReason', {
                required: '정정 사유를 선택해주세요',
              })}
              font={watch('correctReason') ? 'value' : 'placeholder'}
              error={errors.correctReason?.message}
              state={errors.correctReason ? 'error' : 'default'}
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
              state={errors.correctPay ? 'error' : 'default'}
            />
          </FlexBox>
          <Textarea
            text="세부 내용"
            description="정정 사유가 발생한 정확한 날짜, 정정 사유의 반영 여부를 작성해주세요"
            placeholder="ex) 2024-05-25 휴일 근무 미반영으로 인한 수당 정정 신청"
            {...register('detail', {
              required: '세부 내용을 입력해주세요',
            })}
            error={errors.detail?.message}
            state={errors.detail ? 'error' : 'default'}
          />
          <FlexBox className="mt-5" width="full" gap="oneHalf">
            <Button type="submit">정정 신청</Button>
            <Button intent="reverse" onClick={() => router.back()}>
              정정 취소
            </Button>
          </FlexBox>
        </form>
      </div>
    </>
  );
}

export default PayStubCorrectForm;
