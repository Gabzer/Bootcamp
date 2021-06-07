export default function PercentageItem({percentage}) {
  let simbol = percentage > 0 ? '+' : '';
  let percentClass = percentage > 0 ? 'text-green-600' : percentage < 0 ? 'text-red-500' : '';
  return <span className={`${percentClass}`} >{simbol}{percentage.toFixed(2)}%</span>;
}
