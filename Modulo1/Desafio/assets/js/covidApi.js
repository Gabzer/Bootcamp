const covidApi = axios.create({
    baseURL: "https://api.covid19api.com/"
});

async function getSummary() {
    let res = await covidApi.get("summary");
    console.log('res1', res);
    return res.data;
}

export default covidApi;