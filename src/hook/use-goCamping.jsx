import {useState, useEffect} from "react";
import { envVars } from "../vars/envVars";

export default function useGoCamping() {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { API_KEY, API_CAMP_KEY } = envVars

    async function postData(url = '') {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'x-cors-api-key': API_KEY,
                "Content-Type": "application/json",
            },
        });
        console.log(response)
        return response.json()
    }

    useEffect(()=>{
        setLoading(true)
        const url = `https://proxy.cors.sh/https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=${API_CAMP_KEY}&_type=json`
        postData(url).then((data) => {
            console.log(data,'calldata')
            setData(data)
        }).catch((e) => {
            console.log(e,'callError')
            setError(`api error: ${e}`)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    return [loading, data]
}

