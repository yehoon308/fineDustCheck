import { SimpleSouthKoreaMapChart } from 'react-simple-south-korea-map-chart';
const data = [
  { locale: '부산광역시', count: 1500 },
  { locale: '대구광역시', count: 3000 },
  { locale: '대전광역시', count: 400 },
  { locale: '강원도', count: 2500 },
  { locale: '광주광역시', count: 1000 },
  { locale: '경기도', count: 4000 },
  { locale: '인천광역시', count: 2200 },
  { locale: '제주특별자치도', count: 100 },
  { locale: '충청북도', count: 49 },
  { locale: '경상북도', count: 2000 },
  { locale: '전라북도', count: 3300 },
  { locale: '세종특별자치시', count: 110 },
  { locale: '충청남도', count: 10 },
  { locale: '경상남도', count: 0 },
  { locale: '전라남도', count: 250 },
  { locale: '울산광역시', count: 100 },
  { locale: '서울특별시', count: 10000 },
];

function Map() {
  const setColorByCount = (count: number) => {
    if (count === 0) return '#495ee9';
    if (count > 500) return '#49e976';
    if (count > 1000) return '#e99c49';
    else return '#ebfffd';
  };
  return (
    <SimpleSouthKoreaMapChart
      setColorByCount={setColorByCount}
      data={data}
      unit="ug/m3"
    />
  );
}
export default Map;
