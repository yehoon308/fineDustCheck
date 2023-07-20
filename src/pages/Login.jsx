import React from 'react';
import KakaoLoginButton from '../components/KakaoLoginButton';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export default function Login() {
  return <ButtonWrapper>{/* <KakaoLoginButton /> */}</ButtonWrapper>;
}
