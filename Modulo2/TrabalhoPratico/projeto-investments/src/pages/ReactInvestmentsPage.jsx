import _ from 'lodash';

import Header from '../components/Header';
import Investment from '../components/Investment';
import Investments from '../components/Investments';
import Main from '../components/Main';

import { investments, reports } from '../data/investments';

export default function ReactInvestmentsPage() {

  function getInvestmentItem(id) {
    return reports.filter(report => report.investmentId === id).sort((result1, result2) => result1.month > result2.month ? 1 : -1);
  }

  return (
    <div>
      <Header>react-investments</Header>
      <Main>
        {investments.map(investment => {
          const result = getInvestmentItem(investment.id);
          console.log('result', result);
          let totalIncome = (_.last(result)).value - (_.first(result)).value;
          let percentage = ((_.first(result)).value * 100) / (_.last(result)).value;

          return (
            <Investments
              key={investment.id}
              investmentsTitle={investment.description}
              totalIncome={totalIncome}
              percentage={percentage}
            >
              <Investment date={'abr/2020'} investment={200} percentage={20} />
              <Investment date={'abr/2020'} investment={-200} percentage={20} />
            </Investments>
          );
        })}
      </Main>
    </div>
  )
}
