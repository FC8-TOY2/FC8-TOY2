import React, { ReactNode, FormEvent } from 'react';

interface FormContainerProps {
  children: ReactNode;
  onSubmit?: () => Promise<void>;
}

export default function FormContainer({
  children,
  onSubmit,
}: FormContainerProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
