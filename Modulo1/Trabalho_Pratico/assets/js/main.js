var newConfirmed, totalConfirmed, newDeaths, totalDeaths, newRecovered, totalRecovered, active, newActive;
var countries;
var selectedContry;
var selectedDate;
const numberFormatter = new Intl.NumberFormat("PT-br");
const comboEl = document.getElementById("combo");
const todayEl = document.getElementById("today");
comboEl.addEventListener("change", selectCountry);
todayEl.addEventListener("change", selectDate);

function selectCountry(evt) {
    evt.preventDefault();
    selectedContry = evt.target.value;
    getTotalByCountryWithDate();
}

function selectDate(evt) {
    evt.preventDefault();
    selectedDate = evt.target.value;
    getTotalByCountryWithDate();
}

function setValuesInDom() {
    document.getElementById("confirmed").textContent = numberFormatter.format(totalConfirmed);
    document.getElementById("death").textContent = numberFormatter.format(totalDeaths);
    document.getElementById("recovered").textContent = numberFormatter.format(totalRecovered);
    document.getElementById("active").textContent = numberFormatter.format(active);
    renderCountries();
}

function renderCountries() {
    for (const country of countries) {
        const option = document.createElement("option");
        option.textContent = country.Country;
        option.value = country.Slug;
        comboEl.appendChild(option);
    }
}

function setFullValuesInDom() {
    document.getElementById("confirmed").textContent = numberFormatter.format(totalConfirmed);
    // var img = document.createElement('img');
    // img.src = "../assets/img/up.png";
    // document.getElementById("tconfirmed").appendChild(img);
    document.getElementById("tconfirmed").textContent = numberFormatter.format(newConfirmed).replace('-', '');
    document.getElementById("death").textContent = numberFormatter.format(totalDeaths);
    document.getElementById("tdeath").textContent = numberFormatter.format(newDeaths).replace('-', '');
    document.getElementById("recovered").textContent = numberFormatter.format(totalRecovered);
    document.getElementById("trecovered").textContent = numberFormatter.format(newRecovered).replace('-', '');
    document.getElementById("active").textContent = numberFormatter.format(active);
    document.getElementById("tactive").textContent = numberFormatter.format(newActive).replace('-', '');
}

async function getTotalByCountryWithDate() {
    if (selectedContry && selectedContry != 'Global' && selectedDate) {
        let startDate = new Date(selectedDate);
        let endDate = new Date(selectedDate.replace(/-/g, ','));
        startDate = `${startDate.getFullYear()}-${("0" + (startDate.getMonth() + 1)).slice(-2)}-${("0" + (startDate.getDate())).slice(-2)}`;
        endDate = `${endDate.getFullYear()}-${("0" + (endDate.getMonth() + 1)).slice(-2)}-${("0" + (endDate.getDate())).slice(-2)}`;

        await fetchJson(`https://api.covid19api.com/country/${selectedContry}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`).then(cases => {
            totalConfirmed = cases[1].Confirmed;
            newConfirmed = cases[1].Confirmed - cases[0].Confirmed;
            totalDeaths = cases[1].Deaths;
            newDeaths = cases[1].Deaths - cases[0].Deaths;
            totalRecovered = cases[1].Recovered;
            newRecovered = cases[1].Recovered - cases[0].Recovered;
            active = cases[1].Active;
            newActive = cases[1].Active - cases[0].Active;
        })
        setFullValuesInDom();
    }
}

async function getSummaryAndCountries() {
    await fetchJson("https://api.covid19api.com/summary").then(cases => {
        totalConfirmed = cases.Global.TotalConfirmed;
        totalDeaths = cases.Global.TotalDeaths;
        totalRecovered = cases.Global.TotalRecovered;
        active = totalConfirmed - (totalRecovered + totalDeaths)
        countries = cases.Countries;
    })
    setValuesInDom();
}
getSummaryAndCountries();

async function fetchJson(url) {
    const r = await fetch(url);
    if (r.ok) {
        return r.json();
    } else {
        throw new Error(r.statusText);
    }
}