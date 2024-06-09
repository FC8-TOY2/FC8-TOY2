'use client';

import { ReactNode } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface ToastProviderProps {
  children: ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        autoClose={1000}
        newestOnTop
        closeOnClick={false}
        draggable
        transition={Slide}
      />
    </>
  );
}

export default ToastProvider;
