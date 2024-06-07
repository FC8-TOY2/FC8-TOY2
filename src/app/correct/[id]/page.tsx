import PayStubCorrectForm from '@/templates/PayStubCorrectForm';
import React from 'react';

interface CorrectEditPageProps {
  params: {
    id: string;
  };
}

async function CorrectEditPage({ params: { id } }: CorrectEditPageProps) {
  return <PayStubCorrectForm id={id} />;
}

export default CorrectEditPage;
