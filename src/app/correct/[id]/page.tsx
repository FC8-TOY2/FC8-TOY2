import { getPayStubCorrection } from '@/db/payStubCorrection';
import PayStubCorrectForm from '@/templates/PayStubCorrectForm';
import React from 'react';

interface CorrectEditPageProps {
  params: {
    id: string;
  };
}

async function CorrectEditPage({ params: { id } }: CorrectEditPageProps) {
  const initialData = await getPayStubCorrection(id);

  return (
    <PayStubCorrectForm id={id} initialData={initialData.payStubCorrection} />
  );
}

export default CorrectEditPage;
