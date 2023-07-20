// import { envVars } from '../vars/envVars';
// import { useQuery } from '@tanstack/react-query';

// export default function useCareCenter({ sigun_nm }) {
//   //   const [data, setData] = useState();
//   //   const [error, setError] = useState();
//   //   const [loading, setLoading] = useState(false);
//   const { API_KEY, API_CARE_KEY } = envVars;

//   async function postData(url = '') {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'x-cors-api-key': API_KEY,
//         'Content-Type': 'application/json',
//       },
//     });
//     return response.json();
//   }

//   const {
//     isLoading,
//     error,
//     data: care,
//     // refetch,
//   } = useQuery(
//     ['Care', sigun_nm.trim()],
//     async () => {
//       const url = `https://proxy.cors.sh/https://openapi.gg.go.kr/PostnatalCare?KEY=${API_CARE_KEY}&TYPE=JSON&SIGUN_NM=${sigun_nm.trim()}&pIndex=1&pSize=100`;
//       return postData(url);
//     },
//     {
//       staleTime: 1000 * 60 * 4,
//     },
//   );

//   //   useEffect(() => {
//   //     setLoading(true);

//   //     postData(url)
//   //       .then((data) => {
//   //         setData(data.PostnatalCare[1].row);
//   //       })
//   //       .catch((e) => {
//   //         setError(`api error: ${e}`);
//   //       })
//   //       .finally(() => {
//   //         setLoading(false);
//   //       });
//   //   }, [sigun_nm]);

//   return [isLoading, error, care];
// }
