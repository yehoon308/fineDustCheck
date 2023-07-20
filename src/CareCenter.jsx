// import React, { useState } from 'react';
// import Loading from './components/Loading';
// import useProducts from './hook/use-products';
// import { useQueryClient } from '@tanstack/react-query';
// import ReactDatePicker from 'react-datepicker';
// import styled from 'styled-components';

// export const DatePickerWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   width: 100vw;
//   padding-right: 20px;

//   .date-picker-input {
//     border: solid 1px;
//     border-radius: 5px;
//     width: 100%;
//     text-align: center;
//     cursor: pointer;
//     margin: 10px;
//   }
// `;

// export default function Kids() {
//   const changeFormat = (in_date) => {
//     const year = in_date.getFullYear();
//     const month = String(in_date.getMonth() + 1).padStart(2, '0');
//     const day = in_date.getDate();
//     const formattedDate = `${year}-${month}-${day}`;
//     return new Date(formattedDate);
//   };

//   const [selectDate, setSelectDate] = useState(new Date());
//   // const [isLoading, error, kids] = useProducts({ date: '2023-07-10' });
//   // const client = useQueryClient();
//   // if (isLoading) {
//   //   return <Loading />;
//   // }

//   const handleChange = (in_date) => {
//     const date = changeFormat(in_date);
//     setSelectDate(date);

//     console.log(date);
//   };
//   console.log(selectDate);
//   return (
//     <div>
//       <DatePickerWrapper>
//         <ReactDatePicker
//           className="date-picker-input"
//           locale="ko"
//           dateFormatCalendar="yyyy년 MM월"
//           dateFormat="yyyy-MM-dd"
//           selected={selectDate}
//           onChange={(date) => handleChange(date)}
//         />
//       </DatePickerWrapper>

//       <div className="flex justify-center">
//         <table className="border border-slate-400 mt-2 w-full mx-2">
//           <thead className="bg-gray-400">
//             <th className="border border-slate-600">일자</th>
//             <th className="border borer-slate-600">대기질 평가</th>
//             <th className="border border-slate-600">오픈일</th>
//             <th className="border border-slate-600">영업상태</th>
//           </thead>
//           <tbody>
//             {/* {kids &&
//               kids?.Kidscafe[1].row.map((item, index) => {
//                 if (item.BSN_STATE_NM === '폐업') {
//                   return;
//                 }
//                 return (
//                   <tr key={index}>
//                     <td className="border border-slate-600">
//                       {item.BIZPLC_NM}
//                     </td>
//                     <td className="border border-slate-600">
//                       {item.REFINE_LOTNO_ADDR}
//                     </td>
//                     <td className="border border-slate-600">
//                       {item.LICENSG_DE}
//                     </td>
//                     <td className="border border-slate-600">
//                       {item.BSN_STATE_NM}
//                     </td>
//                   </tr>
//                 );
//               })} */}
//           </tbody>
//         </table>
//       </div>
//       {/* <button
//         className="border-solid border-slate-600 mt-4 ml-4 p-2"
//         onClick={() => {
//           client.invalidateQueries(['kids', sigun_nm]);
//         }}
//       >
//         새로고침
//       </button> */}
//     </div>
//   );
// }
