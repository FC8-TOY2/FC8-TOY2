import { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

function FormContainer({ children }: FormContainerProps) {
  return <form className="w-full p-4 flex flex-col gap-4">{children}</form>;
}

export default FormContainer;
