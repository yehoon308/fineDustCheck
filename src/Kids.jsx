import React, { useState } from 'react';
import Loading from './components/Loading';
import useProducts from './hook/use-products';
import { useQueryClient } from '@tanstack/react-query';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import Map from './components/map';
import SelectBox from './components/SelectBox';
export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;

  .date-picker-input {
    border: solid 1px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin: 10px;
    padding: 3px;
  }

  .searchButton {
    margin-left: 5vw;
    padding: 5px 10px;
    background-color: #588dd7;
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
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTableRow = styled.div`
  display: flex;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${(props) => props.num || 1};
  background-color: #94a1da25;
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

export default function Kids() {
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
  const [codeGbn, setCodeGbn] = useState('PM10');
  /**
   * ReactDatePicker에서 선택한 값을
   * changeFormat 함수를 이용해 'YYYY-MM-DD' 형태로 변경
   */
  const [reqDate, setReqDate] = useState(changeFormat(today));
  // 커스텀 훅을 통한 API 호출
  const [isLoading, error, kids] = useProducts({ reqDate, isClick });
  // const client = useQueryClient();

  if (isLoading) {
    return <Loading />;
  }
  const handleClick = () => {
    setIsClick(isClick + 1);
  };

  const itemCount = kids?.response.body.totalCount;
  const itemList = kids?.response.body.items;
  const pm25Data = itemList?.filter((item) => item.informCode === 'PM25');
  console.log(pm25Data, itemList, 'itemInfo');
  const handleChange = (in_date) => {
    const date = changeFormat(in_date);
    setSelectDate(in_date);
    setReqDate(date);
  };

  return (
    <div>
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
      <StyledTable>
        <StyledTableRow>
          <StyledTh num={1}>시일</StyledTh>
          <StyledTh num={3}>전국 시황</StyledTh>
          <StyledTh num={1}>총평</StyledTh>
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

      {/* <button
        className="border-solid border-slate-600 mt-4 ml-4 p-2"
        onClick={() => {
          client.invalidateQueries(['kids', sigun_nm]);
        }}
      >
        새로고침
      </button> */}
    </div>
  );
}
