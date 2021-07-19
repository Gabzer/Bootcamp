import { read } from './httpService';

export default async function apiGetResult(year) {
  const election = await read(`/${year}`);
  return election;
}
