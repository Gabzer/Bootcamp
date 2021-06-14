import { read } from './httpService';

export async function apiGetAllCities() {
  const allCities = await read('/cities');
  return allCities;
}

export async function apiGetAllCandidates() {
  const allCandidates = await read('/candidates');
  return allCandidates;
}

export async function apiGetElection(cityId) {
  const election = await read(`/election?cityId=${cityId}`);
  return election;
}
