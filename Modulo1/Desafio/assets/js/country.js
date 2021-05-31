let countries, startDate, endDate, selectedCountry, selectedData = 'Deaths';
let totalConfirmed, totalDeaths, totalRecovered;
let numberLabel = 'Numero de mortes', averageLabel = 'Media de mortes';
let listOfDailyDeaths, listOfDailyConfirmed, listOfDailyRecoveries, listOfDays;

const date_startEl = document.getElementById("date_start");
date_startEl.addEventListener("change", selectStartDate);
const date_endEl = document.getElementById("date_end");
date_endEl.addEventListener("change", selectEndDate);
const cmbCountryEl = document.getElementById("cmbCountry");
cmbCountryEl.addEventListener("change", selectCountry);
const cmbDataEl = document.getElementById("cmbData");
cmbDataEl.addEventListener("change", selectData);
const filtroEl = document.getElementById("filtro");
filtroEl.addEventListener("click", applyFilters);

const covidApi = axios.create({
    baseURL: "https://api.covid19api.com/"
});


async function getSummary() {
    let res = await covidApi.get("summary");
    return res.data;
};
async function getCountry() {
    let res = await covidApi.get(`country/${selectedCountry}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`);
    return res.data;
};
async function getTotalByCountry() {
    let res = await covidApi.get(`total/country/${selectedCountry}`);
    return res.data;
};


(async function() {
    await getSummary().then(cases => {
        countries = cases.Countries;
    });
    renderCountries();
})();
async function getCountryByDates() {
    if (!_.isNil(startDate) && !_.isNil(endDate) && !_.isNil(selectedCountry) && !_.isNil(selectedData)) {
        await getCountry().then(cases => {
            listOfDailyDeaths = calculateDailyList(cases, 'Deaths');
            listOfDailyConfirmed = calculateDailyList(cases, 'Confirmed');
            listOfDailyRecoveries = calculateDailyList(cases, 'Recovered');
            listOfDays = calculateDailyList(cases, 'Date');
        })
        setValuesIntoGraphic();
    }
};
async function getTotalBySelectedCountry() {
    if (!_.isNil(selectedCountry)) {
        await getTotalByCountry().then(cases => {
            let lastCase = _.last(cases);
            totalConfirmed = lastCase.Confirmed;
            totalDeaths = lastCase.Deaths;
            totalRecovered = lastCase.Recovered;
        });
        setValuesInDom();
    }
};


function renderCountries() {
    for (const country of countries) {
        const option = document.createElement("option");
        option.textContent = country.Country;
        option.value = country.Slug;
        cmbCountryEl.appendChild(option);
    }
};


function selectStartDate(evt) {
    startDate = evt.target.value;
    startDate = dateFns.addDays(startDate, -1)
};
function selectEndDate(evt) {
    endDate = evt.target.value;
};
function selectCountry(evt) {
    selectedCountry = evt.target.value;
};
function selectData(evt) {
    selectedData = evt.target.value;
    switch (selectedData) {
        case 'Confirmed':
            numberLabel = 'Numero de confirmados';
            averageLabel = 'Media de confirmados';
            break;
        case 'Recovered':
            numberLabel = 'Numero de recuperados';
            averageLabel = 'Media de recuperados';
            break;
    }
};
function applyFilters(evt) {
    evt.preventDefault();
    getCountryByDates();
    getTotalBySelectedCountry();
};


function setValuesInDom() {
    document.getElementById("kpiconfirmed").textContent = totalConfirmed.toLocaleString("PT");
    document.getElementById("kpideaths").textContent = totalDeaths.toLocaleString("PT");
    document.getElementById("kpirecovered").textContent = totalRecovered.toLocaleString("PT");
}

function setValuesIntoGraphic() {
    let values = selectedData === 'Deaths' ? listOfDailyDeaths : selectedData === 'Confirmed' ? listOfDailyConfirmed : listOfDailyRecoveries;
    let sum = 0;
    let listAverage = [];
    values.map((value) => {
        sum += value;
    });
    values.map(() => {
        listAverage.push(sum / values.length);
    });
    new Chart(document.getElementById("linhas"), {
        type: 'line',
        data: {
            labels: listOfDays,
            datasets: [
                {
                    label: numberLabel,
                    data: values,
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)"
                },
                {
                    label: averageLabel,
                    data: listAverage,
                    borderColor: "rgb(255,140,13)",
                    backgroundColor: "rgb(255,140,13,0.1)"
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Curva diaria de Covid-19"
                },
                layout: {
                    padding: {
                        left: 100,
                        right: 100,
                        top: 50,
                        bottom: 10
                    }
                }
            }
        }
    });
}

function calculateDailyList(list, type) {
    let results = [];
    let sum = 0;
    if (type === 'Date') {
        for (const daily of list) {
            results.push(daily[type].substring(0, 10));
        }
        return _.takeRight(results, (list.length - 1));
    } else {
        for (let i=0; i < list.length; i++) {
            sum += Number(list[i][type]);
            if (i + 1 < list.length) {
                results.push(list[i + 1][type] - list[i][type]);
            }
        }
        return results;
    }
}