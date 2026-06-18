export interface GameElement {
  id: 'quemadura' | 'rayo' | 'escarcha' | 'energia' | 'fisico';
  name: string;
  shortName: string;
  description: string;
  color: string;
}

export const gameElements: GameElement[] = [
  { id: 'quemadura', name: 'Quemadura', shortName: 'QU', description: 'Personajes asociados al elemento Quemadura.', color: '#ff6b35' },
  { id: 'rayo', name: 'Rayo', shortName: 'RA', description: 'Personajes asociados al elemento Rayo.', color: '#ffd84d' },
  { id: 'escarcha', name: 'Escarcha', shortName: 'ES', description: 'Personajes asociados al elemento Escarcha.', color: '#69d5f5' },
  { id: 'energia', name: 'Energia', shortName: 'EN', description: 'Personajes asociados al elemento Energia.', color: '#a987ff' },
  { id: 'fisico', name: 'Fisico', shortName: 'FI', description: 'Personajes asociados al elemento Fisico.', color: '#aeb7c4' },
];
