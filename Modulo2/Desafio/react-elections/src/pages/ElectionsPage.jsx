import { useEffect, useState } from 'react';
import Container from '../components/Container';

import Header from '../components/Header';
import Main from '../components/Main';
import Select from '../components/Select';

import {
  apiGetAllCandidates,
  apiGetAllCities,
  apiGetElection,
} from '../services/apiService';

export default function ElectionsPage() {
  const [allCities, setAllCities] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [elections, setElections] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});

  useEffect(() => {
    (async function getAllCities() {
      const backendAllCities = await apiGetAllCities();
      setAllCities(backendAllCities);
    })();
  }, []);
  useEffect(() => {
    (async function getAllCandidates() {
      const backendAllCandidates = await apiGetAllCandidates();
      setAllCandidates(backendAllCandidates);
    })();
  }, []);
  useEffect(() => {
    const allElectionsPerCity = allCities.map(city => {
      const backendElections = [];

      (async function getAllElections() {
        let listOfElectionPerCity = await apiGetElection(city.id);
        backendElections.push(
          listOfElectionPerCity.sort((a, b) => b.votes - a.votes)
        );
      })();
      return backendElections;
    });
    setElections(allElectionsPerCity);
  }, [allCities]);

  function handleSelectedCity(evt) {
    const selecCity = allCities.filter(city => city.id === evt.target.value);

    let selectedElection = [];
    for (const election of elections) {
      if (election[0][0].cityId === selecCity[0].id) {
        selectedElection = election[0];
      }
    }

    let listOfCandidatesBySelectedElection = [];
    for (const candidate of allCandidates) {
      for (const elect of selectedElection) {
        if (elect.candidateId === candidate.id) {
          const percentage =
            (elect.votes * 100) / selecCity[0].votingPopulation;
          listOfCandidatesBySelectedElection.push({
            ...candidate,
            votes: elect.votes,
            percentage,
          });
        }
      }
    }
    listOfCandidatesBySelectedElection =
      listOfCandidatesBySelectedElection.sort((a, b) => b.votes - a.votes);
    console.log(
      '##--listOfCandidatesBySelectedElection--##',
      listOfCandidatesBySelectedElection
    );

    setSelectedCity(selecCity[0]);
  }

  return (
    <>
      <Header>react-elections</Header>

      <Main>
        <Select list={allCities} onSelectChange={handleSelectedCity} />
        <Container
          title={selectedCity.name}
          totalVoters={selectedCity.votingPopulation}
          abstention={selectedCity.absence}
          presence={selectedCity.presence}
          candidates={1}
        ></Container>
      </Main>
    </>
  );
}
