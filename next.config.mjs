/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'], // Firestore 이미지 URL의 도메인 추가
  },
};

export default nextConfig;
