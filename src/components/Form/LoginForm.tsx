import FormButtons from './Button';
import FormContainer from './FormContainer';
import TextInput from './TextInput';

function LoginForm() {
  return (
    <FormContainer>
      <TextInput
        label="이메일"
        type="text"
        name="eMail"
        placeholder="이메일을 입력해주세요"
        value=""
      />
      <TextInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value=""
      />
      <FormButtons />
    </FormContainer>
  );
}

export default LoginForm;
