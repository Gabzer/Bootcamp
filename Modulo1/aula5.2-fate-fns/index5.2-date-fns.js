import { addDays, compareAsc, compareDesc, format, formatDistance, isValid, parse } from 'date-fns';
import { es, pt } from 'date-fns/locale'

let today = new Date();
console.log(today);
let todayFormatted = format(today, 'dd.MM.yyyy');   // DD eh pros dias do ano
console.log(todayFormatted);
let todayFormatted2 = format(today, 'PPPP');        // por extenso
console.log(todayFormatted2);

// formatacao por localidade
let todayFormatted3 = format(today, 'PPPP', {locale: es});
console.log(todayFormatted3);
let todayFormatted4 = format(today, 'PPPP', {locale: pt});
console.log(todayFormatted4);

//operacoes com datas
let todaySummed = addDays(today, 3);
console.log(todaySummed);
let todaySummed2 = addDays(todaySummed, 3);
console.log(todaySummed2);

//diferenca/distancia entre datas
let endDate = new Date(2021, 12, 31);
let difBetweenDates = formatDistance(today, endDate, {locale: pt});
console.log(`Faltam ${difBetweenDates} ate o Reveillon`);

//ordenacao de datas em um array
let d1 = new Date('2001-01-01');
let d2 = new Date('2005-01-01');
let d3 = new Date('2010-01-01');
let dates = [d1,d2,d3];
let sortAscDates = dates.sort(compareAsc);
console.log(sortAscDates);
let sortDescDates = dates.sort(compareDesc);
console.log(sortDescDates);

//validacao de data
let invalidDate = parse('30-02-2020', 'dd.MM.yyyy', new Date());
console.log(isValid(invalidDate));
