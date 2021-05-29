let bar = new Chart(document.getElementById("barras"), {
    type: 'bar',
    data: {
        labels: ["Palio", "Uno", "Gol", "Corsa", "Up", "Onix"],
        datasets: [
            {
                label: "Realizado",
                data: [10, 35, 24, 11, 12, 19],
                backgroundColor: "#0F0F0F"
            },
            {
                label: "Planejado",
                data: [20, 25, 30, 10, 15, 20],
                backgroundColor: "#FF010E"
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Vendas de Veiculos"
            }
        }
    }
});

let linhas = new Chart(document.getElementById("linhas"), {
    type: 'line',
    data: {
        labels: ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"],
        datasets: [
            {
                label: "Casos Confirmados",
                data: [1123, 1109, 1008, 1208, 1423, 1114, 1036],
                borderColor: "rgb(60,186,159)",
                backgroundColor: "rgb(60,186,159,0.1)"
            },
            {
                label: "Numero de Obitos",
                data: [143, 109, 208, 210, 113, 114, 203],
                borderColor: "rgb(255,140,13)",
                backgroundColor: "rgb(255,140,13,0.1)"
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "left",   //top, bottom, left, right
            },
            title: {
                display: true,
                text: "Curva de Covid"
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

let pizza = new Chart(document.getElementById("pizza"), {
    type: 'pie',
    data: {
        labels: ["Iphone X", "S20", "A32"],
        datasets: [
            {
                label: "Casos Confirmados",
                data: [30, 50, 20], //tem que fechar o 100%
                backgroundColor: ["#3e95cd", "#3c8523", "#42F39f"]
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
                text: "Distribuicao de celulares"
            }
        }
    }
});

setInterval(getData, 3000);

function getData() {
    pizza.data.labels.push("Iphone 12");
    pizza.data.datasets[0].data.push(30);
    pizza.update();
}
