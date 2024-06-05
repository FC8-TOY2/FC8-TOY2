const validateEmail = (email: string) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(email);
};

export default validateEmail;
