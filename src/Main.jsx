import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const StyledTextBox = styled.div`
  background-color: #ffeb99;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 35px;
  font-weight: bold;
  color: #333;
  text-align: center;
  max-width: 80%;
  margin-top: 20px;
`;

function Main() {
  return (
    <StyledMain>
      <StyledTextBox>
        안녕하세요 공공 API를 활용한 대기질 확인 사이트입니다.
        <br />
        미세먼지, 초미세먼지, 오존의 지역별 수치를 보여줍니다.
        <br />
        이용하시려면 기상센터로 이동해주세요.
      </StyledTextBox>
    </StyledMain>
  );
}

export default Main;
