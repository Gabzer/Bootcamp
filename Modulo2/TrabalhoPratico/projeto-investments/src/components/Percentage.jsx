export default function Percentage({total, percentage}) {
  let simbol = total > 0 ? '+' : total < 0 ? '-' : '';
  return <span>{simbol}{percentage.toFixed(2)}%</span>;
}
