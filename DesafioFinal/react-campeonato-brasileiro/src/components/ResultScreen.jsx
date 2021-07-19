import teams from '../types/teams';

export default function ResultScreen({ resultList = [] }) {
  let finalResult = [];
  if (resultList.length > 0) {
    const listLastResult = resultList[resultList.length - 1];
    console.log(listLastResult);
    listLastResult['partidas'].map(partida => {
      console.log(partida);
      const visitante = {
        name: partida.visitante,
        img: teams.find(t => t.name === partida.visitante).img,
        totalPontos: partida.pontuacao_geral_visitante.total_pontos,
        totalVitorias: partida.pontuacao_geral_visitante.total_vitorias,
        totalEmpates: partida.pontuacao_geral_visitante.total_empates,
        totalDerrotas: partida.pontuacao_geral_visitante.total_derrotas,
        totalGolsMarcados:
          partida.pontuacao_geral_visitante.total_gols_marcados,
        totalGolsSofridos:
          partida.pontuacao_geral_visitante.total_gols_sofridos,
        saldoGols:
          partida.pontuacao_geral_visitante.total_gols_marcados -
          partida.pontuacao_geral_visitante.total_gols_sofridos,
      };
      console.log(visitante);
      const mandante = {
        name: partida.mandante,
        img: teams.find(t => t.name === partida.mandante).img,
        totalPontos: partida.pontuacao_geral_mandante.total_pontos,
        totalVitorias: partida.pontuacao_geral_mandante.total_vitorias,
        totalEmpates: partida.pontuacao_geral_mandante.total_empates,
        totalDerrotas: partida.pontuacao_geral_mandante.total_derrotas,
        totalGolsMarcados: partida.pontuacao_geral_mandante.total_gols_marcados,
        totalGolsSofridos: partida.pontuacao_geral_mandante.total_gols_sofridos,
        saldoGols:
          partida.pontuacao_geral_mandante.total_gols_marcados -
          partida.pontuacao_geral_mandante.total_gols_sofridos,
      };
      console.log(mandante);
      finalResult.push(visitante);
      finalResult.push(mandante);
      return '';
    });
    finalResult.sort((a, b) => b.totalPontos - a.totalPontos);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-4">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/1"></th>
            <th className="w-1/1"></th>
            <th className="w-1/2"></th>
            <th className="w-1/1">P</th>
            <th className="w-1/1">V</th>
            <th className="w-1/1">E</th>
            <th className="w-1/1">D</th>
            <th className="w-1/1">GP</th>
            <th className="w-1/1">GC</th>
            <th className="w-1/1">S</th>
          </tr>
        </thead>
        <tbody>
          {finalResult.map((team, index) => {
            const color = index % 2 === 0 ? 'bg-gray-200' : '';
            return (
              <tr className={`${color}`} key={index}>
                <td>{`${index + 1}`.padStart(2, '0')}</td>
                <td>
                  <img
                    src={`/img/${team.img}.png`}
                    alt={`imagem do time ${team.img}`}
                  />
                </td>
                <td>{team.name}</td>
                <td>{team.totalPontos}</td>
                <td>{team.totalVitorias}</td>
                <td>{team.totalEmpates}</td>
                <td>{team.totalDerrotas}</td>
                <td>{team.totalGolsMarcados}</td>
                <td>{team.totalGolsSofridos}</td>
                <td>{team.saldoGols}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
