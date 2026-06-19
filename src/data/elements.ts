export interface GameElement {
  id: 'quemadura' | 'rayo' | 'escarcha' | 'energia' | 'fisico';
  name: string;
  shortName: string;
  icon: string;
  description: string;
  color: string;
}

export const gameElements: GameElement[] = [
  { id: 'quemadura', name: 'Quemadura', shortName: 'QU', icon: '/images/elementos/quemadura.png', description: 'Personajes asociados al elemento Quemadura.', color: '#ff6b35' },
  { id: 'rayo', name: 'Rayo', shortName: 'RA', icon: '/images/elementos/rayo.png', description: 'Personajes asociados al elemento Rayo.', color: '#3978e8' },
  { id: 'escarcha', name: 'Escarcha', shortName: 'ES', icon: '/images/elementos/escarcha.png', description: 'Personajes asociados al elemento Escarcha.', color: '#69d5f5' },
  { id: 'energia', name: 'Energía', shortName: 'EN', icon: '/images/elementos/energia.png', description: 'Personajes asociados al elemento Energía.', color: '#f3a52b' },
  { id: 'fisico', name: 'Físico', shortName: 'FI', icon: '/images/elementos/fisico.png', description: 'Personajes asociados al elemento Físico.', color: '#aeb7c4' },
];
