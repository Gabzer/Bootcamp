export default function Container({
  children: content,
  title = 'Nome da cidade',
  totalVoters = 0,
  abstention = 0,
  presence = 0,
  candidates = 0,
}) {
  return (
    <>
      <div className="border m-4">
        <div className="p-2 m-2 flex flex-row flex-wrap items-center justify-center">
          <h2>
            <strong>Eleição em {title}</strong>
          </h2>
        </div>

        <div className="m-2 flex space-x-5 items-center justify-center">
          <strong>Total de eleitores: </strong>
          {totalVoters.toLocaleString('PT')}
          <strong>Abstenção: </strong>
          {abstention.toLocaleString('PT')}
          <strong>Comparecimento: </strong>
          {presence.toLocaleString('PT')}
        </div>

        <div className="p-2 m-2 flex flex-row flex-wrap items-center justify-center">
          <h4>
            <strong>{candidates.toLocaleString('PT')} candidatos</strong>
          </h4>
        </div>

        {content}
      </div>
    </>
  );
}
