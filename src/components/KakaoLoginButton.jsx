// import React from 'react';
// import { envVars } from '../vars/envVars';
// import kakaoImg from './kakao.jpg';
// import { useNavigate } from 'react-router-dom';

// import styled, { css } from 'styled-components';
// import { MainButton } from '../stories/Button.stories';

// /** 전체 창 */
// const LoginWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginButton = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 50px;
//   align-items: center;
//   justify-content: center;
//   border: solid 2px;
//   padding: 10px;
//   background-color: #48eba4;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 30%;
//   height: 40px;
//   align-items: center;
//   justify-content: space-between;
//   border: solid 1px;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const KakaoLoginButton = () => {
//   const navigate = useNavigate();
//   const { API_KAKAO_KEY } = envVars;
//   const loginWithKakao = () => {
//     // 카카오 SDK가 초기화되어 있는지 확인합니다.
//     if (!window.Kakao.isInitialized()) {
//       // 카카오 SDK를 초기화합니다.
//       window.Kakao.init(API_KAKAO_KEY);
//     }
//     // 카카오 로그인 버튼을 생성합니다.
//     window.Kakao.Auth.createLoginButton({
//       container: '#kakao-login-btn',
//       success: function (authObj) {
//         const userToken = {
//           accessToken: authObj.access_token,
//           refreshToken: authObj.refresh_token,
//           expiresAt: new Date().getTime() + authObj.expires_in * 1000,
//           scopes: authObj.scopes,
//         };
//         // 추출한 정보를 로컬 스토리지에 저장합니다.
//         localStorage.setItem('userToken', JSON.stringify(userToken));
//         navigate('/react/todo');
//       },
//       fail: function (err) {
//         console.log(err);
//       },
//     });
//   };

//   return (
//     <LoginWrapper>
//       <InputWrapper>
//         <label htmlFor="">ID</label>
//         <input type="text" placeholder="ID" />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor="">PASSWORD</label>
//         <input type="text" placeholder="PASSWORD"></input>
//       </InputWrapper>
//       <MainButton />
//       <button onClick={loginWithKakao}>
//         <img src={kakaoImg} alt="카카오 로그인" id="kakao-login-btn" />
//       </button>
//     </LoginWrapper>
//   );
// };

// export default KakaoLoginButton;
