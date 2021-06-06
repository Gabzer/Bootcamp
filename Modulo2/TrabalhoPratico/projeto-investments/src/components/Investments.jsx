import Percentage from "./Percentage";

export default function Investments({ children, investmentsTitle, totalIncome, percentage }) {
  const classH3 = totalIncome > 0 ? 'text-green-500' : totalIncome < 0 ? 'text-red-500' : '';
  return (
    <div className="border p-2 mb-8">
      <h1 className="text-center font-semibold text-2xl mb-3">{investmentsTitle}</h1>
      <h2 className="text-center font-semibold text-lg">
        Rendimento total: <span className={classH3}>R$ {totalIncome.toFixed(2)} (<Percentage total={totalIncome} percentage={percentage} />)</span>
      </h2>
      {children}
    </div>);
}
