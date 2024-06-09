import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-5xl font-bold mb-2">
        Watch & Manage Your Pay Stub
      </p>
      <p className="text-center text-2xl font-bold mb-2">
        당신의 임금은 안전한가요?
      </p>
      <Image
        src="/images/main_page_image.png"
        alt="main page image"
        width={1152}
        height={694}
        className="flex rounded-xl shadow-2xl"
      />
    </div>
  );
}

export default Banner;
