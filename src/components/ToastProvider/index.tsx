'use client';

import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function ToastProvider() {
  return (
    <ToastContainer
      autoClose={2000}
      newestOnTop
      closeOnClick={false}
      draggable
      transition={Slide}
    />
  );
}

export default ToastProvider;
