import _ from 'lodash';

import Header from '../components/Header';
import Investment from '../components/Investment';
import Investments from '../components/Investments';
import Main from '../components/Main';

import { investments, reports } from '../data/investments';

export default function ReactInvestmentsPage() {
  const listOfMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  function getInvestmentItem(id) {
    return reports.filter(report => report.investmentId === id).sort((result1, result2) => result1.month > result2.month ? 1 : -1);
  }
  function getInvestmentPercentage(list) {
    return list.map((item, index) => {
      if (index >= 1) {
        let result1 = item.value - list[index - 1].value;
        let result2 = (result1 * 100) / list[index - 1].value;
        return {...item, percent: result2};
      } else {
        return {...item, percent: 0};
      }
    });
  }

  return (
    <div>
      <Header>react-investments</Header>
      <Main>
        {investments.map(investment => {
          const result = getInvestmentItem(investment.id);
          const completeList = getInvestmentPercentage(result);
          let totalIncome = (_.last(result)).value - (_.first(result)).value;
          let percentage = ((_.first(result)).value * 100) / (_.last(result)).value;

          return (
            <Investments
              key={investment.id}
              investmentsTitle={investment.description}
              totalIncome={totalIncome}
              percentage={percentage}
            >
              {completeList.map(investment => {
                return (
                  <Investment key={investment.id} date={`${listOfMonths[investment.month -1]}/${investment.year}`} investment={investment.value} percentage={investment.percent} />
                );
              })}
            </Investments>
          );
        })}
      </Main>
    </div>
  )
}
