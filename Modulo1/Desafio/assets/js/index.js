import axios from 'axios';

const covidApi = axios.create({
    baseURL: "https://api.covid19api.com/"
});

async function getSummary() {
    let res = await covidApi.get("summary");
    console.log('res1', res);
    return res.data;
}

let res = await getSummary();
console.log('res2', res);