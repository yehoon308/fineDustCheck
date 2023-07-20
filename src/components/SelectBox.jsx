import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 4px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px;
`;

export const Select = styled.select`
  width: 130px;
  height: 40px;
  margin: 5px 20px;
  padding: 5px;
`;

export default function SelectBox({ codeGbn, setCodeGbn, memo }) {
  const handleChange = (e) => {
    setCodeGbn(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <Title>{memo}</Title>
      <Select
        onChange={handleChange}
        value={codeGbn}
        name="choice"
        className="bg-sky-500 hover:bg-sky-700 rounded-lg w-36 h-8"
      >
        <option value="PM10 ">미세먼지</option>
        <option value="PM25">초미세먼지</option>
        <option value="O3">오존</option>
      </Select>
    </SelectBoxWrapper>
  );
}
