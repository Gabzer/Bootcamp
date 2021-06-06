import Percentage from "./Percentage";

export default function Investment({date, investment, percentage}) {
  const classH3 = investment > 0 ? 'text-green-500' : investment < 0 ? 'text-red-500' : '';
  let stringInvestment = investment.toString();
  stringInvestment = stringInvestment.includes('-') ? stringInvestment.replace('-', '') : stringInvestment;
  return (
    <div className='flex'>
      <div className='flex-none p-1'>{date}</div>
      <div className={`flex-grow p-1 space-x-8 ${classH3}`}>R$ {stringInvestment}</div>
      <div className='flex-none p-1'><Percentage total={investment} percentage={percentage} /></div>
    </div>
  )
}
