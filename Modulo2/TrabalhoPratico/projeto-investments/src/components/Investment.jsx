import PercentageItem from "./PercentageITem";

export default function Investment({date, investment, percentage}) {
  const classH3 = percentage > 0 ? 'text-green-600' : percentage < 0 ? 'text-red-500' : '';
  return (
    <div className='flex'>
      <div className='flex-none p-1 mr-8'>{date}</div>
      <div className={`flex-grow p-1 space-x-8 ${classH3}`}>R$ {investment.toFixed(2)}</div>
      <div className='flex-none p-1'><PercentageItem percentage={percentage} /></div>
    </div>
  )
}
