let newConfirmed, totalConfirmed, newDeaths, totalDeaths, newRecovered, totalRecovered, updatedDate;
let countries;
const numberFormatter = new Intl.NumberFormat("PT-br");

const covidApi = axios.create({
    baseURL: "https://api.covid19api.com/"
});

async function getSummary() {
    let res = await covidApi.get("summary");
    return res.data;
};

(async function() {
    await getSummary().then(cases => {
        totalConfirmed = cases.Global.TotalConfirmed.toLocaleString("PT");
        newConfirmed = Number(cases.Global.NewConfirmed);
        totalDeaths = cases.Global.TotalDeaths.toLocaleString("PT");
        newDeaths = Number(cases.Global.NewDeaths);
        totalRecovered = cases.Global.TotalRecovered.toLocaleString("PT");
        newRecovered = Number(cases.Global.NewRecovered);
        updatedDate = cases.Global.Date; //usar date-fns
        countries = cases.Countries;
    });
    setValuesInFirstPage();
})();

async function setValuesInFirstPage() {
    let pizzaContent = await getPizza();
    let barContent = await getBarras();
    document.getElementById("confirmed").innerHTML = totalConfirmed;
    document.getElementById("death").textContent = totalDeaths;
    document.getElementById("recovered").textContent = totalRecovered;
    document.getElementById("date").textContent = `Data de atualização: ${updatedDate}`;
    new Chart(document.getElementById("pizza"), pizzaContent);
    new Chart(document.getElementById("barras"), barContent);
}


/* ----------------------------------------------------------------------------- */
/* -----------------------------First Page Graphics----------------------------- */
/* ----------------------------------------------------------------------------- */
async function getPizza() {
    let percentages = await getPizzaPercentage();
    return {
        type: 'pie',
        data: {
            labels: ["Confirmados", "Recuperados", "Mortes"],
            datasets: [
                {
                    label: "Distribuicao de novos casos",
                    data: [percentages[0], percentages[1], percentages[2]],
                    backgroundColor: ["#3e95cd", "#42F39f", "#3c8523"]
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
                    text: "Distribuicao de novos casos"
                }
            }
        }
    };
}

async function getPizzaPercentage() {
    let totalNewCases = newConfirmed + newDeaths + newRecovered;
    let result = [
        Math.round((newConfirmed * 100) / totalNewCases),
        Math.round((newRecovered * 100) / totalNewCases),
        Math.round((newDeaths * 100) / totalNewCases)
    ];
    return result;
}

async function getBarras() {
    let listCountries = await getTopTenCountries();
    return {
        type: 'bar',
        data: {
            labels: [listCountries[0].Country, listCountries[1].Country, listCountries[2].Country, listCountries[3].Country, listCountries[4].Country, listCountries[5].Country, listCountries[6].Country, listCountries[7].Country, listCountries[8].Country, listCountries[9].Country],
            datasets: [
                {
                    data: [listCountries[0].TotalDeaths, listCountries[1].TotalDeaths, listCountries[2].TotalDeaths, listCountries[3].TotalDeaths, listCountries[4].TotalDeaths, listCountries[5].TotalDeaths, listCountries[6].TotalDeaths, listCountries[7].TotalDeaths, listCountries[8].TotalDeaths, listCountries[9].TotalDeaths],
                    backgroundColor: "#0F0F0F"
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Total de Mortes por pais - Top 10"
                }
            }
        }
    };
}

async function getTopTenCountries() {
    let listInWork = _.sortBy(countries, "TotalDeaths");
    listInWork = _.reverse(listInWork);
    return _.take(listInWork, 10);
}
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */