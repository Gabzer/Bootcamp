import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import apiGetResult from '../services/apiServices';
import ResultScreen from './ResultScreen';
import Select from './Select';

export default function Results() {
  const { ano } = useParams();
  const [year, setYear] = useState(ano);
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async function getAllElections() {
      let listOfResultsPerYear = await apiGetResult(year);
      setResult(listOfResultsPerYear);
    })();
  }, [year]);

  return (
    <>
      <Select selectedYear={year} onSelectChange={setYear} />
      <ResultScreen resultList={result} />
    </>
  );
}
