function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}
log(new Date(), "DEBUG", "Exemplo de currying");

// TRANSFORMACAO EM CURRY
const logCurrying = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
logCurrying(new Date())("DEBUG")("Exemplo de currying");

// BENEFICIO
let logNow = logCurrying(new Date());
logNow("DEBUG")("Exemplo de currying com parametro fixo");

let logDebugNow = logNow("DEBUG");
logDebugNow("Exemplo de cnova funcao por urrying com parametros fixos");