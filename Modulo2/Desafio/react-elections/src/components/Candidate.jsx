export default function Candidate({
  name = 'Nome do candidato',
  username = 'username do candidato',
  percentage = 0,
  totalVotes = 0,
  isFirst = false,
}) {
  const percentClass = isFirst ? 'text-green-600' : 'text-red-500';
  const isElected = isFirst ? 'Eleito' : 'Nao eleito';
  return (
    <>
      <div className="shadow-lg p-4 m-8 w-60 h-60">
        <div className="flex flex-row p-2 relative">
          <img
            className="w-20 h-20 rounded-full"
            src={`/img/${username}.png`}
            alt={`Candidato ${name}`}
          />
          <div className="absolute inset-y-0 right-0 pt-4">
            <div
              className={`${percentClass} flex flex-col font-semibold items-center justify-center`}
            >
              {percentage.toFixed(2)}%
            </div>
            <div className=" text-sm">
              {totalVotes.toLocaleString('PT')} votos
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="text-xl font-semibold">{name}</div>
          <div className={`${percentClass} p-4 text-sm`}>{isElected}</div>
        </div>
      </div>
    </>
  );
}
