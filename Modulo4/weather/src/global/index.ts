import { atom } from 'jotai';

import { CityEntity } from '../api/Entities/EntityDefinition';

export const citiesAtom = atom<CityEntity[]>([]);
export const checkedCityAtom = atom<number | undefined>(undefined);
export const themeAtom = atom<'dark' | 'light'>('light');
