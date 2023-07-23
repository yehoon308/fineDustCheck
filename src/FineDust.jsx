import React, { useState } from 'react';
import Loading from './components/Loading';
import useProducts from './hook/use-products';
import { useQueryClient } from '@tanstack/react-query';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import Map from './components/map';
import SelectBox from './components/SelectBox';
import { Row, Col } from 'react-bootstrap';

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  margin-right: 10px;

  .date-picker-input {
    border: solid 3px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin: 10px;
    padding: 3px;
  }

  .searchButton {
    margin-left: 2vw;
    padding: 5px 10px;
    background-color: #444444;
    color: #ffffff;
    border: 1px solid;
    border-radius: 5px;
  }
`;
// export const TableWrapper = styled.table`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin: 1px;
//   width: 100%;
// `;
export const StyledTable = styled.div`
  padding: 0 2rem 2rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, #dbe7fc 0%, #f2f2f2 50%, #dbe7fc 100%);
  overflow-x: auto;
`;

export const StyledTableRow = styled.div`
  display: flex;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${(props) => props.num || 1};
  background-color: #b8d0fa;
  font-weight: 600;
  border: 1px solid;
  margin: 0 auto;
  padding: 1rem;
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex: ${(props) => props.num || 1};
  border: 1px solid;
  margin: 0 auto;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 4rem;
  width: 100vw;
`;
export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 1rem;
  margin: 0.7rem;
`;

export default function FineDust() {
  /**
   * ReactDatePicker에서 받은 값을
   * 파라미터로 넣을 string 형식으로
   * 포맷을 변경하는 함수
   */
  const changeFormat = (in_date) => {
    const year = in_date.getFullYear();
    const month = String(in_date.getMonth() + 1).padStart(2, '0');
    const day = String(in_date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  // Date 형식의 오늘 날짜
  const today = new Date();
  // ReactDatePicker의 value값을 useState로 저장
  const [selectDate, setSelectDate] = useState(today);
  const [isClick, setIsClick] = useState(0);
  const [codeGbn, setCodeGbn] = useState('PM25');
  /**
   * ReactDatePicker에서 선택한 값을
   * changeFormat 함수를 이용해 'YYYY-MM-DD' 형태로 변경
   */
  const [reqDate, setReqDate] = useState(changeFormat(today));
  // 커스텀 훅을 통한 API 호출
  const [isLoading, error, fineDust] = useProducts({
    reqDate,
    isClick,
  });
  // const client = useQueryClient();

  if (isLoading) {
    return <Loading />;
  }
  const handleClick = () => {
    setIsClick(isClick + 1);
  };

  const itemCount = fineDust?.response.body.totalCount;
  const itemList = fineDust?.response.body.items;

  const pm25Data = itemList?.filter((item) => item.informCode === codeGbn);

  console.log(pm25Data, itemList, codeGbn, 'itemInfo');
  const handleChange = (in_date) => {
    const date = changeFormat(in_date);
    setSelectDate(in_date);
    setReqDate(date);
  };

  return (
    <div>
      <Row>
        <SelectBoxWrapper>
          <SelectBox codeGbn={codeGbn} setCodeGbn={setCodeGbn} memo="구분 :" />

          <DatePickerWrapper>
            <ReactDatePicker
              className="date-picker-input"
              locale="ko"
              dateFormatCalendar="yyyy년 MM월"
              dateFormat="yyyy-MM-dd"
              selected={selectDate}
              onChange={(date) => handleChange(date)}
            />
            <button className="searchButton" onClick={handleClick}>
              조회
            </button>
          </DatePickerWrapper>
        </SelectBoxWrapper>
      </Row>

      <StyledTable>
        <Row>
          <InfoTextBox>🟧나쁨 🟨보통 🟦좋음</InfoTextBox>
        </Row>
        <StyledTableRow>
          <StyledTh num={1}>시 일</StyledTh>
          <StyledTh num={3}>전국 시황</StyledTh>
          <StyledTh num={1}>설 명</StyledTh>
        </StyledTableRow>
        {pm25Data &&
          pm25Data?.map((item, index) => {
            return (
              <StyledTableRow key={index}>
                <StyledTd num={1}>
                  {`발표일: ${item.dataTime}`}
                  <br />
                  {`예측일자: ${item.informData}`}
                </StyledTd>
                <StyledTd num={3}>
                  <Map informGrade={item.informGrade} />
                </StyledTd>
                <StyledTd num={1}>{item.informOverall}</StyledTd>
              </StyledTableRow>
            );
          })}
      </StyledTable>
    </div>
  );
}
