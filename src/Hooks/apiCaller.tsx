import axios from "axios";
import { useEffect, useState } from "react"

export const CategoryApi = () => {
    const [data, setData] = useState([]);

    const callApi = () => {
        axios.get(('https://fakestoreapi.com/products?limit=4'))
            .then((response) => setData(response.data)).catch((error) => { console.log(error, "error") })
    }
    useEffect(() => {
        console.log("lo")
        callApi();
    }, []);
    return [data]
}
export const CategorySelect = () => {
    const [data, setData] = useState([]);

    const callApi = () => {
        axios.get(('https://fakestoreapi.com/products/category/electronics'))
            .then((response) => setData(response.data)).catch((error) => { console.log(error, "error") })
    }
    useEffect(() => {
        console.log("lo")
        callApi();
    }, []);
    return [data]
}