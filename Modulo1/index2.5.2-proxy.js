let Carro = {
    proprietario: "Fernanda",
    ano: 2016
}

const handler = {
    get(target, property, receiver) {  // trap
        console.log(`GET ${property}`);
        if (property in target) {
            return target[property];
        }
        return "Propriedade inexistente";
    }
}

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.ano);
console.log(carroProxy.ano);