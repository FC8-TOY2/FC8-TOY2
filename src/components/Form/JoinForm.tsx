import Button from './Button';
import FormContainer from './FormContainer';
import TextInput from './TextInput';

function JoinForm() {
  return (
    <FormContainer>
      <TextInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요"
        value=""
      />
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
      <TextInput
        label="비밀번호 확인"
        type="password"
        name="password-check"
        placeholder="비밀번호를 다시 입력해주세요"
        value=""
      />
      <Button
        backgroundColor="bg-violet-600 "
        buttonInnerText="회원가입"
        textColor="text-white"
      />
    </FormContainer>
  );
}

export default JoinForm;
